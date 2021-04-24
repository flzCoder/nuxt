module.exports = {
  apps : [{
    name: "ssr",
    script: "./start.js",
    instances  : 8,
    exec_mode  : "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_prod: {
      NODE_ENV: "production",
    }
  }]
}
