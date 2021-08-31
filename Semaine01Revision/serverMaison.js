const http = require('http'); // #Include ou using comme dans c#
const fs = require('fs');

// On créer l'objet de type serveur web 
const server = http.createServer((req, response) => {
    response.statusCode = 200;
    // Le header permet de dire ce qu'on veux envoyer 
    response.setHeader('Content-Type', 'text/html');
    // avec .end on commence et fini le message a envoyer qui est ecrit en parametre 
    // exemple : l'utilisateur écrit site.com/blogs le req.url = '/blogs'
    console.log(req.url);

    let chemin = './views/';

    switch (req.url) {
        case '/':
            chemin += 'index.html';
            break;
        case '/apropos':
            chemin += 'apropos.html';
            break;
        default:
            chemin += 'error404.html';
            break;
    }

    // renvoyer une page HTML
    // lire le fichier en parametre , ensuite avec la fonction on prend l'erreur et la data 
    fs.readFile(chemin, (err, data) => {
        // si il y a une erreure on l'écrit dans le log et on termine la communication 
        if (err) {
            console.log(err);
        }
        // sinon on a une data et non un erreure , data qui contient /quelqueChose exemeple: /blog
        else {
            response.write(data);
        }
        // une fois l'action fais on doit terminer la communication
        response.end();
    })

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Le serveur est en mode écouter');
}) // port , adresse IP (localhost) , 
