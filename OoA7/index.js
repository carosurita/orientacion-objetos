
import { Empleado } from './empleados/empleadosGeneral.js';
import { Gerente } from './empleados/gerente.js'
import { Director } from './empleados/director.js'
import { sistemaAutenticacion } from './sistemaAutenticacion.js';
import { Cliente } from './cliente.js';




const empleado = new Empleado ('Juan Peperoni', ' 23478559',10000);
    console.log(empleado);
empleado.asignarClave('1235');
    //console.log(sistemaAutenticacion.login(empleado,'1235'))

const gerente = new Gerente ('Jose Parmesano', '25698774',12000);
    console.log(gerente);
gerente.asignarClave('4567');
    console.log(sistemaAutenticacion.login(gerente,'4567'))

const director = new Director ('Jose Luis Salame', '24103658',15000);
    console.log(director);
director.asignarClave('7896');
    console.log(sistemaAutenticacion.login(director,'7895'));


 /*
    console.log ("El salario del Empleado es de " + empleado.verBonificion());
    console.log ("El salario del Gerente es de "+ gerente.verBonificion());
    console.log ("El salario del Director es de "+ director.verBonificion());
*/


const cliente = new Cliente ('Marcos Perz', '27559664', '358447');
    console.log(cliente);
cliente.asignarClave('5555');
    console.log(sistemaAutenticacion.login(cliente,'5555'));








