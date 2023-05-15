
export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    
    //no le estamos pasando los datos al construcctor, por lo que hay que pasarlos
    constructor(nombreCliente,dniCliente,rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente =dniCliente;
        this.rutCliente= rutCliente;
    }
}