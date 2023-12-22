class RemoteControl {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    //METODO DE INSTÂNCIA
    increaseVolume() {
        this.volume += 2
    }
    //METODO DE INSTÂNCIA
    lowerVolume() {
        this.volume -= 2
    }
    //METODO ESTATICO 
    static offVolume() {
        console.log('OK, metodo estatico ok')
    }
}

const createControl = new RemoteControl('LG')
createControl.increaseVolume() // QUANDO FAZEMOS A INSTANCIA DO CREATE CONTROL ACESSAMOS O METODO ATRAVES DO PONTO, POR ISTO CHAMAMOS METODO DE INSTÂNCIA
createControl.increaseVolume()
createControl.increaseVolume()
RemoteControl.offVolume() // METODO QUE NAO PRECISAMOS INSTANCIAR COM A PALAVRA NEW E JA FAZEMOS A CHAMADA COM A FUNCAO MODELO 

console.log(createControl)