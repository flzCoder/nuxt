module.exports = {
  apps : [{
    name: 'nuxtssr',
    exec_mode: 'cluster',
    instances: 4,
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  }]
}

