import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  filteredPokemons: Pokemon[] = this.pokemonList;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon = this.pokemonList.find(
      (pokemon) => pokemon.id === Number(pokemonId)
    );
    if (pokemon) {
      console.log(`The selected pokemon is ${pokemon?.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log("No pokemon was found");
      this.pokemonSelected = pokemon;
    }
  }

  filterPokemons(searchTerm: string) {
    if (searchTerm) {
      this.filteredPokemons = this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredPokemons = this.pokemonList;
    }
  }
}
