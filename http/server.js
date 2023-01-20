const http = require('http')

let port = 8000

const server = http.createServer()

server.on('request', (req, res) => {
    req.on('data', msg => {
        console.log(`[client ${new Date().toISOString()}] New data ➡ ${msg.toString()}`)
        console.log(`[information ${new Date().toISOString()}] Reponse for client ➡ ${msg.toString()}`)
        res.write(msg.toString())
    })
    req.on('close', () => {
        console.log(`[client ${new Date().toISOString()}] Disconnect`)
    })
}).listen(port, () => {
    console.log(`server started on port ${port}`)
})