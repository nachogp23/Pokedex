const cards = document.getElementById("pokedex");

const fetchUser = () => {
    const promises = [];

    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        //console.log(results);
        const pokemon = results.map((result) => ({
            // console.log(result);
            name: result.name,
            image: result.sprites["front_shiny"],
            type: result.types.map((type) => type.type.name).join(", "),
            id: result.id,
            game: result.game_indices.map((index) => index.version.name).join(", "),
            baseExp: result.base_experience,
        }));
        displayPokemon(pokemon);
        btnFn(pokemon);

    });
};

const displayPokemon = (pokemon) => {
    //console.log(user);

    const myPokemon = pokemon
        .map(
            (newPokemon) =>
            `
        <li class = "card">
            <h2 class = "card-title">${newPokemon.name}</h2>
            <img class = "card-image" src="${newPokemon.image}">
            <p class = "card-subtitle">Type: ${newPokemon.type}</p>
            <p class = "card-id"> ID: ${newPokemon.id}</p>
            <p class = "card-baseExp"> Base Experience: ${newPokemon.baseExp}</p>
            <button type = "button" class = "button"> More Info! </button>
        </li>
    `
        )
        .join("");
    cards.innerHTML = myPokemon;

    //cards.appendChild(addBtn());
};





const btnFn = (pokemon) => {
    const btn = document.querySelector("button");
    const card = document.querySelector("li");

    //const pokemonGame = pokemon.map((thePokemon) => thePokemon.)
    //console.log(pokemonGame);
    btn.addEventListener("click", (pokemon) => {

        console.log("boton pulsado");
        //console.log(pokemon.game);
        // console.log(pokemon.baseExp);
        const games = document.createElement("p");
        games.textContent = pokemon.game;
        games.textContent = "hola holita vecinito";
        card.appendChild(games);

    });

}

//const showGames = (a) => console.log(a)


fetchUser();