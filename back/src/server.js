const http = require("http");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")
http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');

if(req.url.includes("onsearch")){
    
    getCharById(res,Number(req.url.split("/").at(-1)));
    return
}

if(req.url.includes("detail")){
    getCharDetail(res,Number(req.url.split("/").at(-1)));
    return
}


res.writeHead(404,{'Content-Type':'text/plain'})
res.end("Route not found")


}).listen(3002,"localhost")