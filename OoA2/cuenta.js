export  class cuenta {

    #cliente;
    #saldo;

    constructor (tipo,cliente,numero,agencia, saldo){
        this.tipo = tipo;
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
        if (this.tipo == 'Corriente')
            valor = valor * 1.05;
        else if (this.tipo=='Ahorro')
             valor = valor*1.02;
                
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