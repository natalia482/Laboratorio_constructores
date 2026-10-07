const prompt = require('prompt-sync')();


function Vehiculo(marca, modelo, ano, color, kilometraje) {
  this.marca = marca;             
  this.modelo = modelo;           
  this.ano = ano;               
  this.color = color;             
  this.kilometraje = kilometraje; 
  this.encendido = false;


  this.mostrarInformacion=function(){
    return `Datos del vehiculo: 
    - Marca: ${this.marca}
    - Modelo: ${this.modelo}
    - Año de fabricación: ${this.ano}    
    - Color: ${this.color}
    - Kilometraje: ${this.kilometraje} `
  }

  this.encender=function(){
    this.encendido = true;
    return `El vehículo ${this.marca} ${this.modelo} se ha encendido.`;
  }

  this.recorrerDistancia = function(km) {
    this.kilometraje += km;
    return `El nuevo kilometraje de ${this.marca} es: ${this.kilometraje} km.`;
  };

}

const vehículoInput = [];

for(let i=1; i<=3 ; i++){
    console.log("====== REGISTRE VEHICULO ======");
    const marcaInput = prompt('Ingresa la marca del vehículo: ');
    const modeloInput = prompt('Ingresa el modelo del vehículo: ');
    const anoInput = prompt('Ingresa el año del vehículo: ');
    const colorInput = prompt('Ingresa el color del vehículo: ');
    const kilometrajeInput = prompt('Ingresa el kilometraje del vehículo: ');

    const auto = new Vehiculo(marcaInput, modeloInput, anoInput, colorInput, kilometrajeInput);
    vehículoInput.push(auto); 
}

console.log("       DATOS DEL VEHICULO EN EL CONCESIONARIO      ");
console.log("===========================================\n");

vehículoInput.forEach((vehiculo, indice) => {
  console.log(`--- Vehículo ${indice + 1} ---`);
  
  console.log(vehiculo.mostrarInformacion());
  console.log(vehiculo.encender());
  console.log(vehiculo.recorrerDistancia(100));

});