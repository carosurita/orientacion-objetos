import {Cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js'

//cliente Leonardo
const cliente = new Cliente ();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente='34258776';
cliente.rutCliente='125874558896';

const cuentaClienteLeonardo = new cuentaCorriente();
cuentaClienteLeonardo.numero = '1';
cuentaClienteLeonardo.agencia='001';
cuentaClienteLeonardo.cliente= cliente;


//console.log (cuentaClienteLeonardo);
    let saldo = cuentaClienteLeonardo.verSaldo();
    //console.log("el saldo actual es " + saldo);

saldo= cuentaClienteLeonardo.depositoEnCuenta(150);
    console.log("el saldo actual de (cuentaClienteLeonardo) " + saldo);

saldo = cuentaClienteLeonardo.retirarDeCuenta(20);
    //console.log('el saldo actual es (cuentaClienteLeonardo)' + saldo);


//cliente Jose
const cliente2 = new Cliente ();
cliente2.nombreCliente = 'jose';
cliente2.dniCliente='29558776';
cliente2.rutCliente='1255600558896';    

const cuentaClienteJose = new cuentaCorriente();
cuentaClienteJose.numero = '2';
cuentaClienteJose.agencia='002';
cuentaClienteJose.cliente= cliente2;

//hacemos esto para ver como proteger los datos y como sirve manejarlo por privado. sin IF -que esta en cCorriente,- en el segundo console.log no me levanta los datos del cliente, sino que me muestra el que asigne o sea, este 0.. en cambiom con el if, me va a seguir levantando lo de la funcion real
console.log(cuentaClienteJose.cliente);
cuentaClienteJose.cliente = 0;
console.log(cuentaClienteJose.cliente);




let parametroValor = 20;
//console.log('parametro valor', parametroValor)
cuentaClienteLeonardo.transferirParaCuenta(parametroValor,cuentaClienteJose);
//console.log('parametro valor', parametroValor)
const saldoJose = cuentaClienteJose.verSaldo();
console.log('el saldo actual (cuentaClienteJose)' + saldoJose)

const saldoLeonardo = cuentaClienteLeonardo.verSaldo()
console.log ('el saldo de (cuentaClienteLeonardo) es ' + saldoLeonardo);








