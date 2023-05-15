//debemos validar si dentro de usuario existe el metodo implementado. Js, los objetos, sus propiedades y metodos los tiene como un indice, listado. Yo tengo el nombre de la interface (q en este caso es AUTENTICABLE)que yo debo  chequear
export class sistemaAutenticacion {

   static login (usuario,clave) {
    //esta autenticable dentro del objeto y dentro de la funcion, si está como atributo
        if ("autenticable" in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable (clave);
        else   
            return false;
            
        
    }

    
}