//interface punto donde existe la comunicación entre clases. como atributoy como metodo. en este caso, sería clave.Accede a el pasandolo , en este caso,como un parametro. Pero hay que buscar una forma más segura de encapsular

export class sistemaAutenticacion {

    //funcion estatica se instancian una sola vez, comunes para todas las intancias de esas clases. Se crea una sola vez
   static login (usuario,clave) {
        return usuario.autenticable (clave);
        //esta funcion, llama directo al metodo e internamente resuelve y  nos retorna si la clave del usuario es correcta o no. 
        // return usuario.clave ==clave; ... teniamos antes esto y lo llamabamos con el get
    }

    
}