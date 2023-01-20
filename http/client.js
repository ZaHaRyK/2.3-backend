const http = require('http')

const options = {
    method: 'POST',
    port: 8000
}

console.time('time')
const MessageForRequest = 'Hello world!'

const req = http.request(options, (res) => {
    res.on('data', (msg) => {
        if(msg.toString() === MessageForRequest) {
            console.log(`${msg.toString()}`)
            console.timeEnd('time')
        }
    })
})

req.write(MessageForRequest) 