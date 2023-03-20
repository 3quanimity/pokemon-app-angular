// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
// Services
import { PokemonService } from "./pokemon.service";
// Components
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
// Directives
import { CardStylingDirective } from "./card-styling.directive";
// Pipes
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
  providers: [PokemonService],
})
export class PokemonModule {}
