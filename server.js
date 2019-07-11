const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// ----

// custom route
server.use(jsonServer.rewriter({
  "/auth/register": "/auth"
}))

// ----


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})