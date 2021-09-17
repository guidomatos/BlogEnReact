// Funciones

function saludar( nombre ) {
    return `Hola ${nombre}`;
}

saludar = 45;

console.log(saludar);

const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}`;



// console.log(saludar('Guido'));
console.log(saludar2('Guido'));
console.log(saludar3('Alan'));


const obtenerAlumno = () => (
    {
        codigoAlumno : '2994324',
        nombreAlumno : 'Guido'
    }
);

console.log(obtenerAlumno());