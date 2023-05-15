import { Cliente } from "./cliente.js";

export class cuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo; //# privado, los cambios solo se pueden generar dentro de la clase  _tratalo como privado

    //no son  funciones, pero funcionan como tal, set para asignarle un valor a una variable privada y get para traer ese valor, o sea, poder acceder a el
    set cliente(valor) {
        if (valor instanceof Cliente) //si, el valor es una instancia de la clase cliente, solo en ese punto, atribuyo el valor de refencia. El codigo se protege 
            this.#cliente =valor;
    }

    get cliente (){
        return this.#cliente;
    }
        

    //define los valores que va a buscar new al crear algo nuevo.podemos visualizar datos de la clase y pasarle parametros nuevos
    constructor() {
        this.cliente =null; //null, es una variable que no tiene aun un valor definido, pero existe.. si no lo pongo, va a decir que no esta definido 
        this.numero='';
        this.#saldo=0;
        this.agencia= '';

    }

    //metodo, funcionalidad de la clase
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