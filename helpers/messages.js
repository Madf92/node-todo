require ('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('=============================='.green);
    console.log('===='.green,'  Select an option  '.blue,'===='.green);
    console.log('==============================\n'.green);
    console.log(`${'1.'.blue}  create a new task`.green);
    console.log(`${'2.'.blue}  list all tasks`.green);
    console.log(`${'3.'.blue}  update a task`.green);
    console.log(`${'4.'.blue}  delete a task`.green);
    console.log(`${'5.'.blue}  exit`.green);
    console.log('=============================='.green);

    const readline = require('readline').createInterface({
        input : process.stdin,
        output: process.stdout
    });

    readline.question('Select an option: ', (opt) => {
        readline.close();
    });
}

const pause = () => {
    const readline = require('readline').createInterface({
        input : process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, () => {
        readline.close();
    });
}

module.exports = {
    mostrarMenu,
    pause
}