const jsonServer  = require('json-server')

const mediaPlayerServer =    jsonServer.create()


const router = jsonServer.router('db.json')

const miidleware = jsonServer.defaults()


const port = process.env.PORT || 4000;


mediaPlayerServer.use(miidleware)
mediaPlayerServer.use(router)


mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player server started at port ${port} and waiting for client request !!!!`);
})


