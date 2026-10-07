function Estudiante(nombre, grado, nota ){
    this.nombre = nombre;
    this.grado = grado;
    this.nota = nota;
    
    this.mostrarResultado = function(){
        if(this.nota >= 3.0){
            this.aprobado = true;
            return `-${nombre} del grado ${grado} aprobo con ${nota}`;
        }else{
            this.aprobado = false;
             return `* ${nombre} del grado ${grado} reprobo con ${nota}`;
        }
    }
}

const estudiante1 = new Estudiante("Marcos", 9 , 3.5);
const estudiante2 = new Estudiante("Mariel", 8 , 4.0);
const estudiante3 = new Estudiante("Ana", 6 , 4.5);
const estudiante4 = new Estudiante("David", 10 , 2.0);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());