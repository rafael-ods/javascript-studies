// AMBAS AS FUNCAO CONSTRUTORAS E A FABRICA TBM RETORNAM OBJETOS

// FUNCAO CONSTRUTORA SEMPRE DEVE SE INICIAR COM LETRAS MAIUSCULAS E DEVE SER SEMPRE ACOMPANHADA DA PALAVRA RESERVADA NEW NA CHAMADA DEPOIS DA SUA CRIACAO
// EX new Date()

function Create(name, lastname) {

    this.name = name
    this.lastname = lastname

    this.metodo = () => {
        return `${name} Estou chamando`
    }

    //AO UTILIZAR A PALAVRA NEW ELA JA INDICA QUE A FUNCAO NOS RETONARA UM OBJETO E POR ISTO NAO PRECISAMOS DA PALAVRA RETURN E CRIAR UM OBJETO

}

const peopleOne = new Create('Rafael', 'Oliveira')
console.log(peopleOne.metodo())