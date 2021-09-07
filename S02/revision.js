// avec const on créer une variable qui ne peut pas tere changer
// On a pas besoin de dire quel est le type de la variable
const firstName = 'Olivier';
// Permet d'écrire a la console surtout pour debuger 
console.log(firstName);
// Avec let on créer un variable qui peut etre modifier par la suite 
let age = 33;

age++;
console.log(age);

// True étant 1 si on additionne 1 a true ça donne 2
const test = true + 1;
console.log(test);

// Ici les 2 variable vont se concatener pour donner une plus longue string et non un int 
const test2 = 125 + '9';
console.log(test2);

console.log(('b' + 'a' + + 'a' + 'a'));

function displayUser() {
    console.log('Bonjour de la fonction');
}

displayUser();

function testFunc(age, nom) {
    console.log('Bonjour je m\'apelle ' + nom + ' j\'ai ' + age + ' ans.');
    // besoin de fair eun back apostrophe pour pouvoir écrire du texte avec des variables a l'interieur 
    console.log(`Bonjour je m'apelle ${nom} j'ai ${age} ans.`);
}

testFunc(10, 'Olivier');

// tableau en JS
const fruits = ['Kiwi', 'Fraise', 'Banane', 'Pomme', 'Pamplemousse'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Push permet d'ajouter a la fin de la liste 
fruits.push('Orange');
console.log('-------------------');

fruits.forEach(f => console.log(f));

// Fonction JavaScript , utilisé comme fonction a cours terme ou utilisé peu de fois 
const sum = (a, b) => a + b;

const result = sum(12, 8);
console.log(result);

// filtre permt de filtrer les resultat un peu comme une condition if 
const filtre = fruits.filter(f => f.length > 6);
console.log(filtre);

const numbers = [10, 20, 30, 40];
const MULTIPLIER = 3;

// Map applique un fonction a chaque element d'un tableau
const producuts = numbers.map(n => n * MULTIPLIER).filter(n => n > 75).map(n => n + 9);
console.log(producuts);
console.log(numbers);

// création d'un objet 
const spiderman = {
    hero: 'SpiderMan',
    alterEgo: 'Peter Parker',
    movies: [{ title: 'SpiderMan1' }, { title: 'SpiderMan2' }, { title: 'SpiderMan3' }]
};

const ironman = {
    hero: 'IronMan',
    alterEgo: 'Tony Stark',
    movies: [{ title: 'Iron Man 1' }, { title: 'Iron Man 2' }]
};

// Création de class
class Avenger {
    // Constucteur pour la class 
    constructor(hero, alterEgo, Movies) {
        // Attributs de la class 
        this.hero = hero;
        this.alterEgo = alterEgo;
        this.Movies = Movies;
    }

     test(){
console.log('Test de la fonction Avenger');
    }
}

// Création d'un objet a partir d'une class avec des parametre 
const oneAvenger = new Avenger('Hulk','Bruce Baner',[{title:'Film1'},{title:'Film2'}])
console.log(oneAvenger.hero);
console.log(oneAvenger.Movies);

// Afficher le nom de son alterEgo , utilisé un peu comme un propriété C#
console.log(spiderman.alterEgo);


