//STRING SAO INDEXADAS isto quer dizer que cada letra tem sua posição representado por NUMERO


const string = 'Rafael oliveira'


console.log(string.charAt(5)) // nos retorna a letra ao passar o numero como parametro
console.log(string.indexOf('oli', 8)) // podemos passar dois parametros primeiro oq desejamos buscar e seguindo a posicao de onde deve começar a busca
console.log(string.lastIndexOf('r', 12)) // podemos passar dois parametros primeiro oq desejamos buscar e seguindo a posicao de onde deve começar a busca so que de tras para frente
console.log(string.replace('Rafael', 'Celso')) // funcao que substitui uma string por outra
console.log(string.length) // atribudo de saber o total de caracteres de uma string
console.log(string.slice(0, 6)) // funcao que fatia uma string que voce consegue pegar dando dois argumentos a ela o inicio e sua posicao final podemos passar valor negativo e vai pegar de tras para frente
console.log(string.split(' ')) // funcao que nos retorna um array, se dermos espaço ele pega todo o conteudo da STING e separa no array cada uma em uma posicao
console.log(string.toUpperCase()) // transforma em letra maiuscula
console.log(string.toLowerCase()) // transforma em letra minuscula