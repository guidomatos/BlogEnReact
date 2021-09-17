// Desestructuracion Objetos

const obtenerPersona = () => {

    const persona = {
        nombre: 'Guido',
        apellido: 'Matos',
        edad: 33,
        email: 'guido.matos.88@gmail.com'
    };

    return persona;

}

const { nombre, edad } = obtenerPersona();

console.log('nombre',nombre);
console.log('edad',edad);