/**  
 * // Esta función me permite tomar una carta
 * Esta función crea un nuevo deck
 * @param {array<String>} deck es un arreglo de string
 * @returns {array<String>} regresa la carta del deck
*/

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
