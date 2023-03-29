//importar biblioteca que use o protocolo HTTP e URL
const http = require('http');
const url = require('url');
const fs = require("fs");



function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data)
    });
}

//criar uma funcao para trabalhar no servidor
var callback = function (resquest, response){
    response.writeHead(200,{"Content-type": "text/html"})
    //response.end("<h1>ola mundo node.js</h1>")

    var parts = url.parse(resquest.url)
    var path = parts.path

    if (parts.path == "/"){
        //response.end("Quero abrir SiteBatata.html")
        response.writeHead(200, {"Content-type": "text/html"})
        readFile(response,"sitebatata.html")
    }else if (parts.path == "/rota1"){
        //response.end("Arquivo 02 - JSON")
        response.writeHead(200, {"Content-type": "application/json"})
        readFile(response,"cadastro.json")
    }else if (parts.path == "/rota2"){
        //response.end("Arquivo 03 - txt")
        response.writeHead(200, {"Content-type": "text/html"})
        readFile(response,"404.txt")
    }else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "img/jpeg"})
        readFile(response,"arquivo4.jpeg")
    }else if(parts.path == "/rota4"){
        response.writeHead(200, {"Content-type": "text/html"})
        readFile(response,"unicusul_aula3.html.txt")
    }else{
        response.end("rota invalida")
    }
}

//Montar Servidor
/* var server = http.createServer(function(request, response){
response.writeHead(200,{"Content-type": "text/plain"})

response.end("ola mundo node.js")
}
) */

//Configurar a porta que sera utilizada
var server = http.createServer(callback)
server.listen(3000)

//Monstra msg no terminal para indicar status
console.log("[SERVER - ON] ... servidor montado em http://localhost:3000");