import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

// TODO: either add a navigation to next and previous pokemon, or pokemon evolutions
@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
})
export class PokemonDetailsComponent {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: number = Number(this.route.snapshot.paramMap.get("id"));
    this.pokemonService
      .getPokemonById(pokemonId)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["/edit/pokemon", pokemon.id]);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }
}
