module.exports = {
  apps: [
    {
      name: "vl-land-ind",
      cwd: "/var/www/vibro-laser/app/vl-land-ind",
      script: "npm",
      args: "start", // next start на 127.0.0.1:3000
      env: { NODE_ENV: "production", PORT: "3003" },
      watch: false,
      //   max_restarts: 10
    },
  ],
};
