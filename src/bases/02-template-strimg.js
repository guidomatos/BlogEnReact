// template strings

const nombre = 'Guido';
const apellido = 'Matos';

console.log(nombre + ' ' + apellido);

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function obtenerSaludo (miNombre) {
    // return 'Hola ' + miNombre;
    const saludo = `Hola ${ (miNombre === '' ? 'desconocido' : miNombre) }`;
    // let saludo = '';
    // if (miNombre === '') {
    //     saludo = `Hola desconocido`;
    // } else {
    //     saludo = `Hola ${miNombre}`;
    // }
    // return `Hola ${miNombre}`;
    return saludo;
}

console.log( obtenerSaludo(nombreCompleto) );
console.log( obtenerSaludo('') );