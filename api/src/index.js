import { server } from 'hapi'

const init = async () => {
  const api = server({
    port: 8000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:3000']
      }
    }
  })

  api.route({
    method: 'GET',
    path: '/hello',
    handler: () => 'hello world'
  })

  await api.start()

  console.log(`Server running at: ${api.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
