import { Cuenta } from "./Cuenta.js";

export class cuentaNomina extends Cuenta {
    constructor(cliente, numero,agencia,saldo) {
        super(cliente, numero, agencia,saldo);
    }
    //al ser abstracto el método en Cuenta, hace que tengas que implementar el metodo extendido 
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor,1);
     }
}