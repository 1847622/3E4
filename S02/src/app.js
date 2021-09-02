import express from 'express'; // La variable doit avoir le meme nom que la bilbiotheque
import dayjs from 'dayjs';

const app = express();


app.get('/date',(req,res) => {
res.status(200);
res.set('Content-Type','text/plain');
res.send(dayjs().format());

});

app.get('/premiere',(req,res) => {
    // ici on envoie des reponses au client 
res.status(200);
res.set('Content-Type','text/plain');
res.send('Notre premiere route avec express');

});

// maths/somme
//maths/difference
//maths/produit
//maths/quotient
//maths/reste

// avec le :operation on prend le lien écrit par le client sur le url du fureteur pour ensuite faire un switch case pour rediriger ce qu'on veut faire
app.get('/maths/:operation',(req,res) => {

    const operation = req.params.operation;
    console.log(operation);

// parseInt permet de convertir un variable de type string en variable de type int pour pouvoir calculer 
// Le deuxieme parametre ( 10 ) est la base des nombres 
const a = parseInt(req.query.a,10);
const b = parseInt(req.query.b,10);
let resultat = 0;

switch(operation)
{
    case 'somme':
        resultat = a+b;
        break;
    case 'difference':
        resultat = a - b;
         break;
     case 'produit':
         resultat = a * b;
            break;
    case 'quotient':
        resultat = a / b;
        break;
        case 'reste':
            resultat = a % b;
        break;
    default: 
    res.status(400);
    return res.send('Opération incconue');

}

        res.status(200);
        res.set('Content-Type','text/html'); // Voici le contenu qu'on va envoyer 
        res.send(`<h1>${resultat}</h1>`); // send est équivalent a un return 

//console.log(req.query);

});

export default app;