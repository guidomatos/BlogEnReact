import heroes from '../data/heroes';

// console.log(heroes);

export const getHeroeById = (id) => {
    return heroes.find( (item) => item.id === id );
}

// console.log ( getHeroeById(2) );

export const getHeroesPorPropietario = ( propietario ) => {
    return heroes.filter( (item) => item.propietario === propietario );
}

// console.log( getHeroesPorPropietario( 'DC' ) );