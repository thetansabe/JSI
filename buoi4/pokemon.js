const pokemons = [
    {
      "name": "Spearow",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
      "type": ["Flying"],
      "hp": 40,
      "attack": 60,
      "defense": 30
    },
    {
      "name": "Bulbasaur",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "type": ["Grass", "Poison"],
      "hp": 45,
      "attack": 49,
      "defense": 49
    },
    {
      "name": "Charmander",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      "type": ["Fire"],
      "hp": 39,
      "attack": 52,
      "defense": 43
    },
    {
      "name": "Squirtle",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      "type": ["Water"],
      "hp": 44,
      "attack": 48,
      "defense": 65
    },
    {
      "name": "Pikachu",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      "type": ["Electric"],
      "hp": 35,
      "attack": 55,
      "defense": 40
    },
    {
      "name": "Jigglypuff",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
      "type": ["Normal", "Fairy"],
      "hp": 115,
      "attack": 45,
      "defense": 20
    },
    {
      "name": "Geodude",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
      "type": ["Rock", "Ground"],
      "hp": 40,
      "attack": 80,
      "defense": 100
    },
    {
      "name": "Alakazam",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
      "type": ["Psychic"],
      "hp": 55,
      "attack": 50,
      "defense": 45
    },
    {
      "name": "Gyarados",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png",
      "type": ["Water", "Flying"],
      "hp": 95,
      "attack": 125,
      "defense": 79
    },
    {
      "name": "Snorlax",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
      "type": ["Normal"],
      "hp": 160,
      "attack": 110,
      "defense": 65
    }
];


//bai 1: in ra ten cua pokemon co' suc tan cong manh nhat
//sap xep mang pokemons theo thu tu giam dan -> truy cap den pokemons[0]
pokemons.sort( (objTruoc, objSau) => {} )


//bai 2: in ra ten cua pokemon co' suc phong thu yeu nhat

//bai 3: chon 2 pokemon, cho 2 con giao dau', tim con` manh hon:
//pokemon A thang pokemon B khi vao chi khi 
//trung binh cong cac chi so hp, attack, defense cua pokemon A > pokemon B

//1) tao funtion TBC(attack, defense, hp){} => tra ve TBC
//2) neu TBC(pokemonA) > TBC(pokemonB) thi pokemonA thang, nguoc lai pokemon B thang

//bai 4: chon ra 2 pokemon NGAU NHIEN, yeu cau y het bai 3

//bai 5:
const typeAdvantages = [
    { attackingType: "Water", effectiveAgainst: ["Fire", "Ground", "Rock"] },
    { attackingType: "Fire", effectiveAgainst: ["Grass", "Bug", "Ice", "Steel"] },
    { attackingType: "Grass", effectiveAgainst: ["Water", "Ground", "Rock"] },
    { attackingType: "Electric", effectiveAgainst: ["Water", "Flying"] },
    { attackingType: "Ice", effectiveAgainst: ["Grass", "Ground", "Flying", "Dragon"] },
    { attackingType: "Fighting", effectiveAgainst: ["Normal", "Ice", "Rock", "Steel", "Dark"] },
    { attackingType: "Poison", effectiveAgainst: ["Grass", "Fairy"] },
    { attackingType: "Ground", effectiveAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"] },
    { attackingType: "Flying", effectiveAgainst: ["Grass", "Fighting", "Bug"] },
    { attackingType: "Psychic", effectiveAgainst: ["Fighting", "Poison"] }
];

//neu pokemon A co' type la water, ma pokemon B co' he Electric thi pokemon B duoc +20 diem tan cong
//tinh toan lai TBC, tim pokemon thang
  