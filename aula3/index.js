import {Cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js'

//cliente Leonardo
const cliente = new Cliente ('Leonardo','34258776','125874558896');
//console.log(cliente);
const cuentaClienteLeonardo = new cuentaCorriente(cliente,'1','001');
console.log(cliente,cuentaClienteLeonardo);


//cliente Jose
const cliente2 = new Cliente ('jose','29558776','1255600558896');

const cuentaClienteJose = new cuentaCorriente(cliente2,'2', '002');
console.log(cliente2,cuentaClienteJose);

console.log('la cantidad de cuentas corrientes es de'+ cuentaCorriente.cantidadCuentas);


//DEPOSITOS, EXTRACCIONES Y TRANSFERENCIAS

let saldo = cuentaClienteLeonardo.verSaldo();
saldo= cuentaClienteLeonardo.depositoEnCuenta(150);
    //console.log("el saldo actual de (cuentaClienteLeonardo) " + saldo);
saldo = cuentaClienteLeonardo.retirarDeCuenta(20);
    //console.log('el saldo actual es (cuentaClienteLeonardo)' + saldo);

let parametroValor = 20;
cuentaClienteLeonardo.transferirParaCuenta(parametroValor,cuentaClienteJose);

const saldoLeonardo = cuentaClienteLeonardo.verSaldo()
    console.log ('el saldo de (cuentaClienteLeonardo) es ' + saldoLeonardo);
const saldoJose = cuentaClienteJose.verSaldo();
    console.log('el saldo actual (cuentaClienteJose)' + saldoJose)












