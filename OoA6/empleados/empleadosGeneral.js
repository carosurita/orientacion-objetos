export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave

    constructor (nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave= '';
    }

    verBonificion() {
        return this.#salario;
    }

    _verBonificion(bono) {
        return this.#salario + this.#salario*bono/100;
    }

    asignarClave (clave) {
        this.#clave = clave;
    }
//ahora en vez de get clave () tenemos un método autenticable. Eto hace que sea más fiable porque no accede al atributo directamente, sino que está encapsulado dentro de un metodo
    autenticable (clave) {
        return clave == this.#clave;
    }
}