//cuenta es una clase ABSTRACTA.. se puede extender a sus hijos peor no se puede instanciar, esto hace que, las clases que son hijas y que usan los parametros de Cuenta no se vean afectadas. 

export  class Cuenta {
    #cliente;
    #saldo;


    constructor (cliente,numero,agencia, saldo){
        
        // Con este error,al intentar instanciar, no va a dejar que el programa continue funcionando

        if (this.constructor == Cuenta ) {
            throw new Error("no se debe instanciar objetos de la clase cuenta"); 
        }
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
//metodo abstracto, no ejecuta nada y muestra un mensaje de como implementarlo
    retirarDeCuenta(valor,comision){
            throw new Error("Debe implementar el método retirarDeCuenta en su clase"); 
    }

    _retirarDeCuenta(valor,comision){
        
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