const http = require('http'); // #Include ou using comme dans c#

const server = http.createServer( (req,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('Bonjour mon premier serveur');

    console.log(req.url);
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Le serveur est en mode écouter');
}) // port , adresse IP (localhost) , 
