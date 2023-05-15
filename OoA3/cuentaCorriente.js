
import { Cliente } from './Cliente.js';
import { Cuenta } from './Cuenta.js';

//extends.. extiende la herencia de la clase padre.. 
export class cuentaCorriente extends Cuenta {
    static cantidadCuentas=0;

    constructor(cliente, numero,agencia) {
        
        super(cliente, numero, agencia,0);
        cuentaCorriente.cantidadCuentas++;
    }

  
    retirarDeCuenta(valor){
        //valor = valor * 1.05; al poner el parametro comision en cuenta, esto cambia a: 
        //en vez de sobrescribir metodo, llamo al metodo privado
        super._retirarDeCuenta(valor,5);
     }
    
}