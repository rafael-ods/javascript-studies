const product = {
    name: 'Coca-cola',
    prize: 10.25
}

const any = {
    ...product, //FORMA DE USAR SPREAD OPERATOR DENTRO DE UM NOVO OBJETO E CRIAR UM OBJETO TOTALMENTE INDEPENDENTE DO SEU OBJETO PRINCIPAL
    material: 'free', //FORMA DE ADICIONAR UMA NOVA PROPRIEDADE AO UM OBJETO
    talk() { // PODEMOS ADICIONAR FUNCAO TBM
        console.log('Ola')
    },
    // name: product.name //ESTA Ë A FORMA DE APENAS COPIAR UMA PROPRIEDADE DE UM OBJETO
}
any.name = 'pizza'
any.talk()
console.log(any)
console.log(product)

console.log(Object.getOwnPropertyDescriptor(product, 'name')) // ELE PEGA A DESCRIÇÃO DA PROPRIEDADE DO OBJETO 