const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>
{
    res.write('welcome')
    res.end()
})

server.listen(5000)