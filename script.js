// Classe Pokémon
class Pokemon {
    constructor(nome, nivel, tipo) {
        this.nome = nome;
        this.nivel = nivel;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "fogo":
                ataque = "lançou Chama";
                break;
            case "água":
                ataque = "usou Jato d'Água";
                break;
            case "elétrico":
                ataque = "soltou um Choque do Trovão";
                break;
            case "planta":
                ataque = "usou Chicote de Vinha";
                break;
            default:
                ataque = "usou um ataque básico";
        }

        console.log(`O Pokémon ${this.nome} (${this.tipo}) atacou e ${ataque}!`);
    }
}

// Criando alguns Pokémons
let charmander = new Pokemon("Charmander", 12, "Fogo");
let squirtle = new Pokemon("Squirtle", 10, "Água");
let pikachu = new Pokemon("Pikachu", 15, "Elétrico");
let bulbasaur = new Pokemon("Bulbasaur", 11, "Planta");

// Chamando os ataques
charmander.atacar();
squirtle.atacar();
pikachu.atacar();
bulbasaur.atacar();
