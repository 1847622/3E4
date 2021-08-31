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

app.get('/somme',(req,res) => {

//console.log(req.query);

// parseInt permet de convertir un variable de type string en variable de type int pour pouvoir calculer 
// Le deuxieme parametre ( 10 ) est la base des nombres 
const a = parseInt(req.query.a,10);
const b = parseInt(req.query.b,10);

res.status(200);
res.set('Content-Type','text/html');

res.send(`<h1>${a+b}</h1>`);

});

export default app;