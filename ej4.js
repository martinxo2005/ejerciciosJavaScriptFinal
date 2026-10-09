// a) actualizarJugador(jugador, nivel, puntos)
// Implementa una función que reciba un jugador, su nuevo nivel y sus nuevos puntos. Debe devolver un
// nuevo objeto que:
//  Conserve los datos del jugador recibido.
//  Tenga actualizados nivel y puntos.
//  Incorpore la propiedad activo con valor true.
// Ejemplo de llamada y resultado esperado:
// const actualizado = actualizarJugador(jugador, 5, 1000);
// {
//  id: 17,
//  nombre: "Laura",
//  nivel: 5,
//  puntos: 1000,
//  activo: true
// }
// El objeto recibido como parámetro no debe modificarse. Después de ejecutar la función, jugador debe
// seguir conservando sus datos iniciales:
// {
//  id: 17,
//  nombre: "Laura",
//  nivel: 4,
 
const jugador = {
    id: 17,
    nombre: "Laura",
    nivel: 4,
    puntos: 850
};

const actualizarJugador = (jugador, nivel, puntos) => {
    return {
        ...jugador,
        nivel: nivel,
        puntos: puntos,
        activo: true
    };

};

const actualizado = actualizarJugador(jugador, 5, 1000);
console.log(actualizado);
console.log(jugador);

// b) obtenerResumenJugador(jugador)
// Implementa una función que reciba un jugador y devuelva un nuevo objeto que contenga únicamente su
// nombre y sus puntos. Para el jugador actualizado del ejemplo anterior:
// obtenerResumenJugador(actualizado);
// // Resultado esperado:
// { nombre: "Laura", puntos: 1000 }

const obtenerResumenJugador = jugador => {
    return {
        nombre: jugador.nombre,
        puntos: jugador.puntos
    };
};

console.log(obtenerResumenJugador(actualizado));