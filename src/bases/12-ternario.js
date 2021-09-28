const activo = false;

// 1ra forma
// let mensaje = "";
// if (activo) {
//         mensaje = 'Activo';
// } else {
//         mensaje = 'Inactivo';
// }

// 2da forma
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

// 3ra forma
const mensaje = activo && 'Activo';

console.log('mensaje', mensaje);