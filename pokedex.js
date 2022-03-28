const fetchPokemon = () => {
    const pokename = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage("./pikachusad.gif");
        }

       else {
        return res.json();
       } 
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprite.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}
//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}
 pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png")
const imprimir = () => {
    const pokename = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
} 