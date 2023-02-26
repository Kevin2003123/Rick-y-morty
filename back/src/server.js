const http = require("http");
const characters = require("./utils/data")
http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');

if(req.url.split("/").filter((x,i)=> i!==3).join("/")== "/rickandmorty/character"){
    
    let id = req.url.split("/")[3]
    let character = characters.find(x=>x.id==id)
    if(character){
    res.writeHead(200,{"Content-Type": "application/json"})
    res.end(JSON.stringify(character));
    }else{
    res.writeHead(404,{"Content-Type": "application/json"})
    res.end(JSON.stringify({}))
    }
   return;
}

res.writeHead(404,{'Content-Type':'text/plain'})
res.end("Route not found")

}).listen(3002,"localhost")