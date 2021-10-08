const http =require('http');

// const server =http.createServer(
//     (req,res)=>{
//         console.log(req)
//         res.write('welcome to home page')
//         res.end ()
//     }

// )

const server =http.createServer(
    (req,res)=>{
        if(req.url==='/'){
            res.write('welcome to our home page')
            res.end()
        }
        else if(req.url==='/about')
        {
            res.write('short story of ours')
            res.end()
        }
        else{
            res.write(`<h1>oops!</h1>
            <a href='/'>home page</a>
            `)
            res.end()
        }

    }

)

server.listen(5000) 