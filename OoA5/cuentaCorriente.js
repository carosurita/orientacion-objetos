
import { Cliente } from './Cliente.js';
import { Cuenta } from './Cuenta.js';


export class cuentaCorriente extends Cuenta {
    static cantidadCuentas=0;

    constructor(cliente, numero,agencia) {
        super(cliente, numero, agencia,0);
        cuentaCorriente.cantidadCuentas++;
    }

  
    retirarDeCuenta(valor){
     
        super._retirarDeCuenta(valor,5);
     }
    
}