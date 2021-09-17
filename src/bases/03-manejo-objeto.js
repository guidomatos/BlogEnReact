// manejo de objetos

const persona = {
    nombre: 'Guido',
    apellido: 'Matos',
    edad: 33,
    email: 'guido.matos.88@gmail.com'
};

// console.log(persona);

persona.nombre = 'Guido Alan';
// persona['nombre'] = 'Guido Alan';



const persona2 = { ...persona };
persona2.nombre = 'Angela';
persona2.apellido = 'Calderon';
persona2.telefono = '2853886';
persona2.direcciones = {
    direccionCasa: 'direccion casa',
    direccionTrabajo: 'direccion trabajo'
}

console.table(persona);
console.log(persona2);