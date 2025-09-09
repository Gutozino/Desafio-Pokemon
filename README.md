# 🎮 Desafio: Classes de um Jogo - Versão Pokémon

## 📝 Objetivo
Criar uma classe genérica que represente um **Pokémon** em uma aventura.  
Cada Pokémon deve ter propriedades próprias e um método que simule seu ataque de acordo com o tipo.

---

## 🔧 O que foi utilizado
- Variáveis  
- Operadores  
- Laços de repetição  
- Estruturas de decisão  
- Funções  
- Classes e Objetos  

---

## 🏗️ Estrutura da Classe

A classe `Pokemon` possui as seguintes propriedades:
- `nome` → Nome do Pokémon (ex: Pikachu, Charmander, etc.)
- `nivel` → Nível do Pokémon (ex: 10, 12, etc.)
- `tipo` → Tipo do Pokémon (ex: fogo, água, elétrico, planta)

Além disso, possui o método:

- `atacar()` → exibe a mensagem:  
  `O Pokémon {nome} ({tipo}) atacou e {ataque}!`

---

## ⚔️ Ataques por Tipo

| Tipo      | Ataque usado                   |
|-----------|--------------------------------|
| Fogo      | lançou Chama                   |
| Água      | usou Jato d'Água              |
| Elétrico  | soltou um Choque do Trovão     |
| Planta    | usou Chicote de Vinha          |
| Outro     | usou um ataque básico          |

---

## 📜 Código

```javascript
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
