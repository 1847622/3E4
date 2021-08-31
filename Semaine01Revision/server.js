const http = require('http'); // #Include ou using comme dans c#

// On créer l'objet de type serveur web 
const server = http.createServer( (req,response) => {
    response.statusCode = 200;
    // Le header permet de dire ce qu'on veux envoyer 
    response.setHeader('Content-Type','text/plain');
    // avec .end on commence et fini le message a envoyer qui est ecrit en parametre 
    response.end('Bonjour mon premier serveur');

    console.log(req.url);
    
    
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Le serveur est en mode écouter');
}) // port , adresse IP (localhost) , 
