import http from 'http'

//ROTAS HTTP método http




const server = http.createServer((req, res) =>{
    return res.end('Hello World')
})

server.listen(3333)