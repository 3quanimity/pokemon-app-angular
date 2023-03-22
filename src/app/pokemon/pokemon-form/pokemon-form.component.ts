import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean = false;
  pictureIdPattern = /^\d{3}$/;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    console.log(this.pokemon);
    this.types = this.pokemonService.getAllowedPkmnTypeList();
    this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean {
    return this.pokemon.type.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.type.push(type);
    } else {
      const index = this.pokemon.type.indexOf(type);
      this.pokemon.type.splice(index, 1);
    }
  }

  isTypeCheckable(type: string): boolean {
    if (this.pokemon.type.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.type.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService
        .addPokemon(this.pokemon)
        .subscribe((pokemon) => this.router.navigate(["/pokemon", pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
        this.router.navigate(["/pokemon", this.pokemon.id]);
      });
    }
  }
}
