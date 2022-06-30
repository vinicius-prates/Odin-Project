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
    // de maneira LÚCIDA. Assim mantemos o a regra do clean code


// Mostra um alerta no topo da tela

 alert(mensagem)


 /* NUMEROS */

    let number = 10 // variavel sem decimal
    let number_decimal = 10.14 // variavel com decimal
    let number_string = '20' 
    
    // Se somarmos uma variavel numeral mais uma string, esses valores serão concatenados então

    let number_sum = number + number_string

    document.getElementById("demo").innerHTML = number_sum;

