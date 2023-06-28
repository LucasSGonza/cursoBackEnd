//https://pokeapi.co/

function getPokemonName(){
    var pokemonName = document.getElementById("input-pokemon").value
    console.log(pokemonName)
    return pokemonName
}

//func consultar api
function searchPokemonInfos(){
    let pokemonName = getPokemonName()
    var url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        document.getElementById("div-img-pokemon").innerHTML = `<img src="${data.sprites.front_default}">`
        document.getElementById("div-infos-pokemon").innerHTML =
                `
                <p> 
                Name: ${data.name} <br>
                Type: ${data.types[0].type.name}
                </p>
                `
        whatBackground(data.types[0].type.name)
    })
}

function whatBackground(pokemonType) {
    var divImgPokemon = document.getElementById("div-img-pokemon");
    console.log(pokemonType)
    divImgPokemon.style.backgroundImage = `url(img/${pokemonType}.jpg)`;
    //divImgPokemon.style.backgroundImage = pokemonType === "normal" && data.types[1] ? `url(img/${pokemonType}.avif)` : ;
    
}
