let udp = require('dgram');
let client = udp.createSocket('udp4');

let timeTwo = ""

client.on('message', (msg,info) => {
    const timeOne = new Date().getTime()
    console.log(`Server ➡  ${msg.toString()}`)
    console.log(`Time lost ${(timeOne - timeTwo) / 10}s`)
});

client.send("hello World!",8000, () => {
    timeTwo = new Date().getTime()
    console.log('sending message')
})