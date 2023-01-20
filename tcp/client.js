const net = require('net')

const socket = new net.Socket()
let timeTwo = ""

socket.on('data', data => {
    const timeOne = new Date().getTime()
    console.log(`server ${data}`)
    console.log(`time ${(timeOne - timeTwo) / 10}s`)
})

socket.on('connect', () => {
    timeTwo = new Date().getTime()
    console.log(`sending message`)
    socket.write('hello World!')
})

socket.connect({port: 3000})