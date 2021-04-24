module.exports = {
  apps : [{
    name: "nuxtssr",
    script: "./start.js",
    instances  : 4,
    exec_mode  : "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_prod: {
      NODE_ENV: "production",
    }
  }]
}

