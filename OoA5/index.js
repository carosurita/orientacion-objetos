import {Cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js'
import {cuentaAhorro } from './cuentaAhorro.js';
import { Cuenta } from './Cuenta.js';
import { cuentaNomina } from './cuentaNomina.js';




const cliente = new Cliente ('Leonardo','34258776','125874558896');
const cliente2 = new Cliente ('jose','29558776','1255600558896');

const cuentaCorrienteLeonardo = new cuentaCorriente(cliente,'1','001');
const cuentaCorrienteJose = new cuentaCorriente(cliente2,'2', '002');


//const cuentaSimple = new Cuenta (cliente, '098', '002',100);
//console.log (cuentaSimple);

const cuentaAhorroLeonardo = new cuentaAhorro (cliente, '0010','001',0 );
    console.log(cuentaCorrienteLeonardo);
    console.log(cuentaAhorroLeonardo);


/*
//CUENTA CORRIENTE
cuentaCorrienteLeonardo.depositoEnCuenta(150);
    console.log ('usted depositó ' + cuentaCorrienteLeonardo.verSaldo());
cuentaCorrienteLeonardo.retirarDeCuenta(30);
    console.log('usted retiro dinero de su cuenta Corriente. Su saldo actual es ' + cuentaCorrienteLeonardo.verSaldo());

//CUENTA AHORRO    
cuentaAhorroLeonardo.depositoEnCuenta(300);
    console.log ('usted depositó ' + cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(130);
    console.log('usted retiro dinero de su cuenta de Ahorro. Su saldo actual es ' + cuentaAhorroLeonardo.verSaldo());

*/

const cuentaNominaLeonardo = new cuentaNomina (cliente,'9855', '001',0);
    console.log (cuentaNominaLeonardo);
cuentaNominaLeonardo.depositoEnCuenta(150);
    console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
    console.log(cuentaNominaLeonardo.verSaldo());










