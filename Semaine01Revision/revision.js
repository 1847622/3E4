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
const test = true +1 ;
console.log(test);

// Ici les 2 variable vont se concatener pour donner une plus longue string et non un int 
const test2 = 125 + '9';
console.log(test2);

console.log(('b'+ 'a' + + 'a' + 'a'));

function displayUser() {
    console.log('Bonjour de la fonction');
}

displayUser();

function testFunc(age,nom){
    console.log('Bonjour je m\'apelle ' + nom + ' j\'ai ' + age + ' ans.');

    console.log(`Bonjour je m'apelle ${nom} j'ai ${age} ans.`);
}

testFunc(10,'Olivier');

// tableau en JS
const fruits = ['Kiwi', 'Fraise', 'Banane', 'Pomme'];

for(let fruit of fruits) {
    console.log(fruit);
}