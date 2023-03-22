import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-pokemon-add",
  template: `
    <pokeball-loader *ngIf="!pokemon"></pokeball-loader>

    <h2 class="center">Add a new Pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class PokemonAddComponent {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
