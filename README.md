# SPRINT 1 (terraLAB)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Sobre o projeto

> Neste projeto foram desenvolvidos habilidades de forma conceitual como a leitura de artigos sobre a arquitetura do terraLAB, Git e sobre como produzir um arquivo README.md. Além do desenvolvimento de um questionamento sobre problemas de um código desenvolvido na linguagem JavaScript.

# Exemplos de problemas em código JavaSCript

> questão 6:

    const soma = () => {
    console.log(parseInt(args[1]) + parseInt(args[2]));
    };

    #declaração da constante subtração através de uma aron function,que permite uma ação como resultado
    const sub = () => {
        console.log(parseInt(args[1]) - parseInt(args[2]));  
    }
    const args = process.argv.slice(2);

    #aplicação várias condiçcondições, na forma de if aninhado
    switch (args[0]) {
        case 'soma':
            soma();
        break;

        case 'sub':
            sub();
        break;

        default:
            console.log('does not support', arg[0]);

> questão 7:
    
    #declaração função(aron function) que permite uma ação como resultado
    const div = () => {
        console.log(parseInt(args[0]) / parseInt(args[1]));
    };

    #declaração de uma constante
    const args = process.argv.slice(2);

    #chamada função
    div();

> questão 9:

    #declaração da constante args, que pega como resultado a entrada de um valor no terminal
    const args = process.argv.slice(2);

    #declaração variáveis
    var x = args[0];
    var y = args[2];
    var operator = args[1];

    #criação de função utilizando variáveis globais varx, var y e varo operator
    function evaluate(param1, param2, operator) {
        return eval(param1 + operator + param2);
    }

    #aplicação lógica e impressão resultados
    if ( console.log( evaluate(x, y, operator) ) ) {} 

# Autor

> Ana Cláudia da Silva
