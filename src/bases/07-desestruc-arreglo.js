// desestructuracion de arreglos

const personajes = ['Superman','Spiderman','Batman'];
console.log(personajes[2]);

const retornarArreglo = () => {
    return ['Superman','Spiderman','Batman'];
}

// const [ p1, p2, p3 ] = personajes;
const [ p1, p2, p3 ] = retornarArreglo();
console.log('p1: ', p1);
console.log('p2: ', p2);
console.log('p3: ', p3);