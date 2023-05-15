export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;
    
   
    constructor(nombreCliente,dniCliente,rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente =dniCliente;
        this.rutCliente= rutCliente;
        this.#clave = '';
    }

    //poliformismo, usar el mismo metodo en clases que no son heredadas
    asignarClave (clave) {
        this.#clave = clave;
    }

    //el polimorfismo permite, para un comportamiento de un metodo que va a tener diferentes formas, puede tener diferente implementacion
    autenticable (clave) {
        return false;
       
    }
}