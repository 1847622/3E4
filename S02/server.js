import chalk from 'chalk';
// const chalk = require('chalk'); équivalent de la ligne en haut , ancienne version 

// importer le contenu fais dans l'autre page ( app.js )
import app from './src/app.js';

console.log(chalk.blue('Tu texte en couleur'));

const PORT = 5000;

app.listen(PORT,err => {
console.log(chalk.blue(`Server listening on port :${PORT}`));

});