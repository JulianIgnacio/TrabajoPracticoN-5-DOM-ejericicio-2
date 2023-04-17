class Persona {
    constructor(nombre,edad,DNI,sexo,peso,altura,añoNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }
    mostrarGeneracion () {
        switch(true){
            case this.edad >= 75:
            alert('Pertenece a la generacion Silent Generation(los niños de la posguerra) su rasgo caracteristico es la austeridad');
            break;
            case this.edad <= 74 || this.edad >= 55:
            alert('Pertenece a la generacion Baby Boom su rasgo caracteristico es la ambicion');
            break;
            case this.edad <= 54 || this.edad >= 43:
            alert('Pertenece a la generacion X su rasgo caracteristico es la obsesion por el exito');
            break;
            case this.edad <= 42 || this.edad >= 30:
            alert('Pertenece a la generacion Y,tambien conocida como millenials, su rasgo caracteristico es la frustracion');
            break;
            case this.edad <= 29 || this.edad >= 13:
            alert('Pertenece a la generacion Z su rasgo caracteristico es la irreverencia');
            break;
            default:
                alert('no pertenece a ninguna de estas generaciones');
        }
    }
    esMayorDeEdad (){
        if(this.edad>=18){
            alert('Es mayor de edad');
        }else {
            alert('Es menor de edad');
        }
    }
    mostrarDatos (){
        alert(`La persona ${this.nombre} de ${this.edad} nacida el ${this.añoNacimiento} de sexo ${this.sexo} pesa ${this.peso}kg y mide ${this.altura}`);
    }

}