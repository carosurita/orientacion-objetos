

export class cuentaAhorro {
    #cliente;
    #saldo;

    constructor (cliente,numero,agencia, saldo){
        this.#cliente=cliente;
        this.numero=numero;
        this.agencia=agencia;
        this.#saldo=saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;  //this, define la cuenta corriente actual. 
            return this.#saldo;
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo)
            this.#saldo -=valor;
            return this.#saldo;
    }

    verSaldo (){
        return this.#saldo
    }

    transferirParaCuenta (valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor=200;// va a seguir pasando el parametro indicado en parametrovalor 
    }
}