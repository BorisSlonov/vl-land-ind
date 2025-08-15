#!/usr/bin/env bash.

set -Eeuo pipefail

APP_DIR="/var/www/vibro-laser/app/vl-land-ind"  
PM2_NAME="vl-land-ind"         
REMOTE="origin"                    

LOG_DIR="$APP_DIR/../logs/$PM2_NAME"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/deploy-$(date +%F-%H%M%S).log"

NC='\033[0m'; GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[0;33m'; CYAN='\033[0;36m'
timestamp() { date '+%F %T'; }
info()  { printf "%b[%s] %s%b\n" "$CYAN"  "$(timestamp)" "$*" "$NC"; }
ok()    { printf "%b[%s] %s%b\n" "$GREEN" "$(timestamp)" "$*" "$NC"; }
warn()  { printf "%b[%s] %s%b\n" "$YELLOW" "$(timestamp)" "$*" "$NC"; }
err()   { printf "%b[%s] %s%b\n" "$RED"   "$(timestamp)" "$*" "$NC"; }

run_step() {
  local desc="$1"; shift
  info "$desc..."
  if "$@" >>"$LOG_FILE" 2>&1; then
    ok "$desc — success"
  else
    err "$desc — ERROR $LOG_FILE"
    echo "---- last 50 lines of log ----"
    tail -n 50 "$LOG_FILE" || true
    echo "---------------------------------"
    exit 1
  fi
}

trap 'err "error: $LOG_FILE"' ERR

START=$(date +%s)
info "check env"
for c in git npm pm2; do
  if ! command -v "$c" >/dev/null 2>&1; then
    err "command '$c' not found in PATH"; exit 1
  fi
done

run_step "move to catalog $APP_DIR" cd "$APP_DIR"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
run_step "git fetch" git fetch --all --prune
run_step "git pull --rebase from $REMOTE/$CURRENT_BRANCH" git pull --rebase "$REMOTE" "$CURRENT_BRANCH"

export NODE_ENV=production
run_step "npm run build" npm run build

if pm2 list | grep -qw "$PM2_NAME"; then
  run_step "PM2 restart $PM2_NAME" pm2 restart "$PM2_NAME"
else
  if [ -f ecosystem.config.js ]; then
    run_step "PM2 start from ecosystem.config.js (--only $PM2_NAME)" pm2 start ecosystem.config.js --only "$PM2_NAME"
  else
    warn "ecosystem.config.js not found — launch through 'pm2 start npm --name $PM2_NAME -- start'"
    run_step "PM2 start $PM2_NAME" pm2 start npm --name "$PM2_NAME" -- start
  fi
fi

END=$(date +%s)
DUR=$((END-START))
ok "Deploy success ${DUR} сек. full log: $LOG_FILE"
