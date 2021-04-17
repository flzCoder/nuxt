const { loadNuxt, build } = require('nuxt')

const app = require('express')()

const port = 3000

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt('dev')

  // Render every route with Nuxt.js
  app.use(nuxt.render)
  build(nuxt)

  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
