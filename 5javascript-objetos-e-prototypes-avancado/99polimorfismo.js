//SUPER CLASS /MAE/PAI
function Account(agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance // SALDO
}


Account.prototype.toWithdraw = function (value) { //VALUE É O VALOR QUE O USUARIO ESTA TENTANDO SACAR
    if (value > this.balance) { // SE O SALDO FOR MENOR QUE O VALOR DESEJADO
        return console.log(`Valor insuficiente ${this.balance}`)
    }

    this.balance -= value
    this.seeBalance()
}

Account.prototype.deposit = function (value) {
    this.balance += value
    this.seeBalance()

}
Account.prototype.seeBalance = function () {
    console.log(`Ag/c: ${this.agency}/${this.account} O seu saldo é de R$${this.balance.toFixed(2)}`)
}




function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance) //Funcao CALL QUE LINKA UMA FUNCAO CONSTRUTORA A OUTRA HERDA AS PROPS
    this.limit = limit
}

CurrentAccount.prototype = Object.create(Account.prototype) // ESTAMOS CRIANDO UM NOVO OBJETO COM CREATE E JA SETANDO O METODO QUE IREMOS QUERER REUTILIZAR NESTE NOVO OBJETO CRIADO
CurrentAccount.prototype.constructor = CurrentAccount //  prototype.constructor PARA PASSARMOS A REFERENCIA PARA CurrentAccount

CurrentAccount.prototype.toWithdraw = function (value) { // PODEMOS REESCREVER UM METODO DE UMA FUNCAO CONSTRUTORA DESTA FORMA
    if (value > (this.balance + this.limit)) {
        return console.log(`Valor insuficiente ${this.balance}`)
    }

    this.balance -= value
    this.seeBalance()
}

function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

const account = new Account('8540', '15407', 300)
const currentAccount = new CurrentAccount('854', '1540', 0, 100)
const savingsAccount = new SavingsAccount('85', '154', 0)
currentAccount.deposit(10)
currentAccount.toWithdraw(110)
currentAccount.toWithdraw(10)


savingsAccount.deposit(10)
savingsAccount.toWithdraw(10)
savingsAccount.toWithdraw(10)