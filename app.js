require('colors');

const { mostrarMenu, pause } = require('./helpers/messages');

console.clear();

const main = async () => {
    mostrarMenu();
    pause();
}

main();