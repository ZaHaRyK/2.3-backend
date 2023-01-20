const net = require('net')
let port = 8000


const request = (socket) => {
    const { remoteAddress } = socket
    console.log(`[information ${new Date().toDateString()}] User has been connected [ip = ${remoteAddress}]`)

    socket.on('data', data => {
        console.log(`[client ${new Date().toISOString()}] New data ➡ ${data}`)
        socket.write(data)
    })

    socket.on('error', () => {
        console.log(`[client ${new Date().toISOString()}] User disconnected`)
    })
}

const server = net.createServer()

server.on('connection', request)
server.listen(port, () => {
    console.log(`server started on port ${port}`)
})