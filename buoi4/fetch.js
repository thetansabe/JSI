const url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';

//https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
const response = fetch(url) //Promise
    .then(data => data.json()) //Response
    .then(res => {
        const pokemons = res.results;
        const newFormat = pokemons.map(pokemon => {
            const pokemonUrl = pokemon.url;
            const pokeData = fetch(pokemonUrl)
                            .then(data => data.json())
                            .then(res => {
                                const name = res.name;
                                const img = res.sprites.back_default;
                                const type = res.types[1];
                                const hp = res.stats[0].base_stat;
                                const attack = res.stats[1].base_stat;
                                const defense = res.stats[2].base_stat;

                                const newFormat = {
                                    name: name,
                                    img: img,
                                    type: type,
                                    hp: hp,
                                    attack : attack,
                                    defense: defense
                                }

                                console.log(newFormat);
                            })
        })
    })


//pokemons = [
//{name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/'},
//{name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/'}
//]


// {
//     name: "string", 
//     img: "string",
//     type: "string",
//     hp: Int16Array,
//     attack: Int16Array,
//     def: Int16Array
// }



