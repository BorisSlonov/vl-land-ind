module.exports = {
  apps: [{
    name: "vl-education",
    cwd: "/var/www/vibro-laser/app/vl-education-prod",
    script: "npm",
    args: "start", // next start на 127.0.0.1:3000
    env: { NODE_ENV: "production", PORT: "3001" },
    watch: false,
 //   max_restarts: 10
  }]
}
