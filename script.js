 /* PRINTA NO CONSOLE DO SITE, F12*/
 console.log("siuuuuu")

 /* VARIAVEIS*/

    // Podemos usar o -let- e o -const- 

    let mensagem = 'eu vou fazer uma máquina do tempo'
    // se tentarmos declarar outra variavel com o mesmo nome, irá dar erro de sintaxe
    // sempre criar uma variavel com seu tipo, exemplo let num = 10
    
    const nome = 'Vinicius Prates'
    // não podemos alterar o conteudo dessa variavel reescrevendo ela, exemplo: (nome = 'Wilson')

    const DATA_NASCIMENTO = '22-11-2003'
    // Usamos caps lock para declarar variaveis que geralmente são dificeis de lembrar

    //Sempre devemos nomear as variaveis de maneira correta, deixando claro pra que ela serve e 
    // de maneira LÚCIDA. Assim mantemos a regra do clean code


// Mostra um alerta no topo da tela

 alert(mensagem)


 /* NUMEROS */

    let number = 10 // variavel sem decimal
    let number_decimal = 10.14 // variavel com decimal
    let number_string = '20' 
    
    // Se somarmos uma variavel numeral mais uma string, esses valores serão concatenados então

    let number_sum = number + number_string

    document.getElementById("demo").innerHTML = number_sum;

    //Operators

    let x = 1, y = 3
    
    // O termo abaixo é considerado um 'unary operator'
    x = -x
    

    console.log(x) // -1, unary negation was applied
    console.log(y - x) // 2, binary operator minus was applied

    /*
      Addition +
      Subtraction -
      Multiplication *
      Division /
      Remainder %
      Exponentiation ** 
    */
    
    
      console.log('1' + 2) // "12"
    
    //quando concatenamos uma string com um número, ambos viram apenas uma string
    //porém quando somamos um número com uma string, elas viram apenas um número
    //podemos perceber que a regra muda de acordo com a ordem
    
    console.log( 6 - '2' ); // 4, converts '2' to a number
    console.log( '6' / '2' ); // 3, converts both operands to numbers

    // No effect on numbers
    console.log( +x ); // 1

    let z = -2;
    console.log( +z ); // -2

    // Converts non-numbers
    console.log( +true ); // 1
    console.log( +"" );   // 0

    let apples = "2";
    let oranges = "3";

    console.log( apples + oranges ); // "23", the binary plus concatenates strings
    // both values converted to numbers before the binary plus
    console.log( +apples + +oranges ); // 5

    // no caso de cima, os sianis de + antes das variaveis, e transformam em números 
    // alert( Number(apples) + Number(oranges) ); // 5
