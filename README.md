# React Pokedex
A pokedex using React.js and Restful APIs
**current version: V0.1 - 9/10/2021

## Request
*Questo repository, temporanemaente privato, contiene il progetto richiesto. Di seguito i requisiti:*

Il tema dell'esercizio è riprodurre una minimale versione del Pokédex. I requisiti che ti diamo sono i seguenti:
    dalla homepage posso visualizzare la lista dei pokemon;
    posso cliccare su un qualsiasi pokemon e visualizzare la scheda dei dettagli del pokemon in questione;
    sia dai dettagli, sia dalla lista dei pokemon, posso dire quali ho catturato (salvando la lista dove preferisci);
    posso filtrare il pokedex per i pokemon non catturati, per quelli catturati o per tutti.

Bonus
    potrei voler cercare i pokémon dalla lista presenta nella homepage, tramite una search input.

Materiale
    https://pokeapi.co/ (le API per recuperare i Pokémon)


## Features
The pokedex is still not in its final form but here is the project:

The Pokedex fetches Restful APIs provided by pokeapi.co, allowing an easy browsing through all the pokemons in the database. 
Users can manage a simple personal collection of pokemons, tha is stored in the LocalStorage. Owned pokemons are highlighted, both in gridview and in detail view.

### Homepage
The homepage gathers in a gridview all the pokemon cards, containing the image, name, type and two buttons, the first linked to the pokemon's details, the other to flag it in the user personal collection. Pressing the button again it will be possible to free te pokemon and remove it from the collection.
In the uppermost section three buttons will allow to filter the gridview, displaying only the creatures in collection, the ones not in collecton and the full lint.

### Pokemon detail view
A personal folder for the pokemon, gathering all the info and stats. It is possible to cycle through all the pokemons with two "next" and "prev" buttons. A conditional check allows to jump from the first to the last one. It is possible to add/remove a pokemon from the collection also fron this view.

# TO-DOs
**TECHNICAL STUFF**
- The overall code needs to be more tidy and commented
- Organize css files in a more coherent methodology (e.g. BEM)


**HOMEPAGE** 
- Automatic redirect towards the detail view when a search is successful, 
- Fix the "not found" bug, that appears at the first render
- Add a textual list in a side column, providing a more compact and quick wa to see all pokemons, with a token/badge for those in the personal collection
- Add a disclaimer and about page
- Add a loader or a welcome animation to give a feedback to the user while data is loading.

**CARDS**
- insert the type and the icon in the card
- implement an infinite scroller

**POKEMON DETAIL VIEW**
- add more details in subviews or drawers


#Version History
**Version 0.1** - first release

Credits: The author doesn't own any kind of propriety on Pokemon, Pokemon logo or any content of the franchise. The project itself is not commercial, as-is and coded only as an exercise. If needed, contact me directly.

