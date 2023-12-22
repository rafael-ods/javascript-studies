class ElectronicDevice {
    constructor(name) {
        this.name = name
        this.connected = false
    }


    connectedDevice() {
        if (this.connected) {
            console.log(`${this.name} esta ligado`)
            return
        }
        return this.connected = true
    }
    turnOffDevice() {
        if (!this.connected) {
            console.log(`${this.name} esta Desligado`)
            return
        }
        return this.connected = false
    }
}


class Smartphone extends ElectronicDevice { // AO CHAMAR UMA NOVA FUNCAO/CLASS CONSTRUTORA E ATRIBUIR A ELA A PALAVRA RESERVADA EXTENDS E PASSAR QUE O OBJETO QUE VAMOS EXTENDER 
    constructor(name, color, modelo) {
        super(name) // AO UTILIZAR SUPER ESTOU PEGANDO A PROPRIEDADE DA CLASS PAI
        this.color = color
        this.modelo = modelo
    }
}

const smart = new Smartphone('Iphone', 'Preto', 'XR')


console.log(smart)