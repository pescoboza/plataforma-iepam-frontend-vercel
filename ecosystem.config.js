module.exports = {
    apps : [{
      name   : "frontend",
      script : "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
      args: "run start",
      error_file: './logs/service_gateway.err',
      log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
      exec_mode: "cluster",
      instances  : 2,
    }]
  }