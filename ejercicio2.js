function Mascotas(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function(){
        return `- La mascota ${nombre} es un ${especie} y tiene ${edad} años con un peso de ${peso}KG`
    };
}

const mascorta1 = new Mascotas("Loli", "Loro", 10, 5);
const mascorta2 = new Mascotas("Layla", "Perro", 2 ,45);
const mascorta3 = new Mascotas("Cosmo", "Gato", 5 ,12);

console.log(mascorta1.presentarse());
console.log(mascorta2.presentarse());
console.log(mascorta3.presentarse());
