export  class Cuenta {

    #cliente;
    #saldo;


    constructor (cliente,numero,agencia, saldo){
        
        this.#cliente=cliente;
        this.numero=numero;
        this.agencia=agencia;
        this.#saldo=saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente) 
            this.#cliente =valor;
    }

    get cliente (){
        return this.#cliente;
    }
    
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;  
            return this.#saldo;
    }

    retirarDeCuenta(valor,comision){
        _retirarDeCuenta(valor,0)//esto esta llamando al metodo privado, esto hace que tengamos un retirarCuenta sin comisioon, este caso, protege la sobreesciruta. No es necesario, pero asi se usa el acceso a un metodo privado
    }

//metodo privado _
    _retirarDeCuenta(valor,comision){
        //agrega parametro valor para dejar el codigo más limpio en cuentaAhorro,corriente
        valor = valor* (1+comision/100);
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
        
    }

    prueba (){
        console.log ('metodo padre');
    }
}