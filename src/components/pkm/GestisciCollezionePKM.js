
/** catchIt si occupa di aggiungere un pokemon alla lista di quelli già catturati
 * 
 * @param {int} id
 * @param {string} name
 * @returns {bool}
 */
export const catchIt = (id, name) => {
    alert(`You've catched a ${name} (${id})!`);

    // se non posso recuperare il "database" lo inizializzo
    if (!localStorage['pokemons']){ 
        localStorage.setItem("pokemons",JSON.stringify([]))
    } 
    
    // ottengo un array con gli id dei pokemon catturati
    let collection = JSON.parse(localStorage.getItem("pokemons"));
    
    // verifico che il pokemon non sia già presente nella collezione
    if(!collection.includes({id}['id'])) {
        // se non era già presente inserisco l'id del pokemon appena catturato
        collection.push({id}['id']);
    }
    
    // salvo l'array aggiornato nel localStorage
    localStorage.setItem("pokemons", JSON.stringify(collection));
};

/** releaseIt si occupa di rimuovere un pokemon alla lista di quelli già catturati
 * 
 * @param {int} id
 * @param {string} name
 * @returns {bool}
 */
export const releaseIt = (id, name) => {
    alert(`You've released a ${name} (${id})!`);
    
    // ottengo un array con gli id dei pokemon catturati
    let collection = JSON.parse(localStorage.getItem("pokemons"));
    
    // verifico che il pokemon sia già presente nella collezione
    if(collection.includes({id}['id'])) {
        // se era già presente rimuovo l'id del pokemon appena liberato
        collection.splice(collection.indexOf({id}['id']),1);
    }
    
    // salvo l'array aggiornato nel localStorage
    localStorage.setItem("pokemons", JSON.stringify(collection));
};

export const checkIt = (id) => {
    
     // se non posso recuperare il "database" lo inizializzo
    if (!localStorage['pokemons']){ 
        localStorage.setItem("pokemons",JSON.stringify([]))
    } 
    let collection = JSON.parse(localStorage.getItem("pokemons"));
    return collection.includes({id}['id']) 
}