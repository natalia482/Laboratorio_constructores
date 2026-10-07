function Libro(nombre, autor,editorial, prestado){
    this.nombre=nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.prestado = prestado;

    this.prestado = false; /*(false no esta prestado / true si esta prestado)*/

    this.prestar = function(){
        if( prestado === this.prestado){
            this.prestado= true;
            return `- LIBRO PRESTADO: ${nombre} ${editorial} `
        }else{
            return `* LIBRO ${nombre}  DE LA EDITORIAL ${editorial} YA FUE PRESTADO`
        }
    }

    this.devolver = function(){
        if( prestado === this.prestado){
            this.prestado= false;
            return `+ Devolución de libro: ${nombre} ${editorial} `
        }else{
            return `** LIBRO ${nombre}  DE LA EDITORIAL ${editorial} NO HA SIDO DEVUELTO AÚN`
        }
    }

}

const libro1 = new Libro("Las cronicas de Narnia", "C. S. Lewis","HarperCollins ", false );
const libro2 = new Libro("Las cronicas de Narnia", "C. S. Lewis","HarperCollins ", true );
const libro3 = new Libro("Las cronicas de Narnia", "C. S. Lewis","HarperCollins ", true );
const libro4 = new Libro("Las cronicas de Narnia", "C. S. Lewis","HarperCollins ", false );

console.log(libro1.prestar());
console.log(libro2.devolver());
console.log(libro3.prestar());
console.log(libro4.devolver());