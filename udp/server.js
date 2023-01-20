let udp = require('dgram');
let server = udp.createSocket('udp4');
let port = 8000

server.on('message',function(msg,info){
    console.log(`[infornation ${new Date().toDateString()}] User conected [ip: ${info.address}]`)
    console.log(`[client ${new Date().toISOString()}] User send data`)
    server.send(msg,info.port,'localhost')
})

server.bind(port, () => {
    console.log(`server start at port ${port}`)
})