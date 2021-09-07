import express from 'express'; // besoin de cette bilbiotheque pour faire les routes 


import HttpError from 'http-errors';
import Http from 'http-status';

import PLANETS from '../data/planets.js'; // les .. permet de descendre d'un niveau de fichier pour aller chercher planets.js dans data 
// PLANETS contients le tableau de toutes les planetes 


const router = express.Router();

// structurer l'esenmbles des routes pour cette ressource
class PlanetsRoutes{

    constructor() {
        // Définitions des routes pour la ressource  planet 
        router.get('/planets', this.getAll); // Retrieve ou Select toutes les planètes
        router.get('/planets/:idPlanet',this.getOne);
       // router.post('/planets', this.post);
        
    }

    getOne(req,res,next){
    const idPlanet = req.params.idPlanet;
    

  /*
       //1. Planete existe = 200 
       let planet;
       for(let p of PLANETS){
        if(p.id == idPlanet){
            planet = p;
            break;
        }
       }*/
      
    const planet = PLANETS.find(p => p.id == idPlanet);
    console.log(planet);

    // S ic'est undefined ca renter dans le if 
    if(!planet)
    {
         return next(HttpError.NotFound(`La panete avec le id ${idPlanet} n'existe pas`));      
    }
    else{
        res.status(200);
        //res.set('Content-Type','application/json');
       res.json(planet); // Content-type + send la reponse sur la meme ligne en json  
    }

   /* post(req,res,next)
    {

    }*/
       



       //2. La planete existe pas = 404 not found


        
    }


    getAll(req,res,next){
        res.status(200);
        res.set('Content-Type','application/json');
        res.send(PLANETS);

    }

}

// Super important ne pas oublier.Sans ces 2 lignes on ne peut pas créer et exporter les informations 
new PlanetsRoutes();
export default router;