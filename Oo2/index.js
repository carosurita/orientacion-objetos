import {Cliente} from './cliente.js'
//import {cuentaCorriente} from './cuentaCorriente.js'
//import { cuentaAhorro } from './cuentaAhorro.js';
import { cuenta } from './cuenta.js';


const cliente = new Cliente ('Leonardo','34258776','125874558896');
const cliente2 = new Cliente ('jose','29558776','1255600558896');

const cuentaCorrienteLeonardo = new cuenta(cliente,'1','001',0);
const cuentaCorrienteJose = new cuenta(cliente2,'2', '002',0);


const cuentaAhorroLeonardo = new cuenta (cliente, '0010','001',0 );
    console.log(cuentaCorrienteLeonardo);
    console.log(cuentaAhorroLeonardo);


//CUENTA CORRIENTE
cuentaCorrienteLeonardo.depositoEnCuenta(150);
    console.log ('usted depositó ' + cuentaCorrienteLeonardo.verSaldo());
cuentaCorrienteLeonardo.retirarDeCuenta(30);
    console.log('usted retiro dinero de su cuenta. Su saldo actual es ' + cuentaCorrienteLeonardo.verSaldo());

//CUENTA AHORRO    
cuentaAhorroLeonardo.depositoEnCuenta(200);
    console.log ('usted depositó ' + cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(30);
    console.log('usted retiro dinero de su cuenta. Su saldo actual es ' + cuentaAhorroLeonardo.verSaldo());
















