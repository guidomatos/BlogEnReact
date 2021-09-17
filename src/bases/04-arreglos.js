// arreglos

// 1ra forma
let arregloGenero = new Array(2);
arregloGenero[0] = 'masculino';
arregloGenero[1] = 'femenino';

arregloGenero.push('genero 3');

console.log(arregloGenero);
console.log(`indice 2: ${arregloGenero[2]}` );


// 2da forma
let arregloAnimales1 = ['gato','perro','leon'];
arregloAnimales1.push('mono');
console.log('arregloAnimales1', arregloAnimales1);


let arregloAnimales2 = [ ...arregloAnimales1, 'puma' ];
console.log('arregloAnimales2', arregloAnimales2);

let arregloAnimales3 = ['tortuga', 'gallo'];

const arregloAnimales4 = arregloAnimales2.concat(arregloAnimales3);
console.log('arregloAnimales4',arregloAnimales4);