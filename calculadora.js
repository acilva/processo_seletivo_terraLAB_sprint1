//questão 3
/*
const args = process.argv.slice(2);
console.log(parseInt(args[0]) + parseInt(args[1]));*/

//questão 5
/*
const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};

const args = process.argv.slice(2);

soma();*/

//questão 6
/*
const soma = () => {
    console.log(parseInt(args[1]) + parseInt(args[2]));
};

const sub = () => {
    console.log(parseInt(args[1]) - parseInt(args[2]));  
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();
    break;

    default:
        console.log('does not support', arg[0]);
}*/

//questão7
const div = () => {
    console.log(parseInt(args[0]) / parseInt(args[1]));
};

const args = process.argv.slice(2);

div();

