function Computador(marca,procesador,ram,precio){
    this.marca = marca;
    this.procesador=procesador;
    this.ram=ram;
    this.precio = precio;
}

const cp1 = new Computador("HP", "AMD", "8 GB", 1500000 );
const cp2 = new Computador("LENOVO", "INTEL", "12 GB", 2000000 );
const cp3 = new Computador("ACER", "MEDIATEK", "10 GB", 1350000 );

console.log(cp1.marca,cp1.procesador,cp1.ram, cp1.precio);
console.log(cp2.marca,cp2.procesador,cp2.ram, cp2.precio);
console.log(cp3.marca,cp3.procesador,cp3.ram, cp3.precio);