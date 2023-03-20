import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";

import { CardStylingDirective } from "./card-styling.directive";

import { PkmnTypeColorPipe } from "./pkmn-type-color.pipe";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemon/:id", component: PokemonDetailsComponent },
];

@NgModule({
  declarations: [
    // Components
    PokemonListComponent,
    PokemonDetailsComponent,
    // Directives
    CardStylingDirective,
    // Pipes
    PkmnTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
