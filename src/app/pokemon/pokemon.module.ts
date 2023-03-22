// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
// Services
import { PokemonService } from "./pokemon.service";
// Components
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { PokemonEditComponent } from "./pokemon-edit/pokemon-edit.component";
import { PokemonAddComponent } from "./pokemon-add/pokemon-add.component";
// Directives
import { CardStylingDirective } from "./card-styling.directive";
// Pipes
import { PkmnTypeColorPipe } from "./pkmn-type-color.pipe";

const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id", component: PokemonEditComponent },
  { path: "add/pokemon", component: PokemonAddComponent },
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemon/:id", component: PokemonDetailsComponent },
];

@NgModule({
  declarations: [
    // Components
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonFormComponent,
    PokemonEditComponent,
    PokemonAddComponent,
    // Directives
    CardStylingDirective,
    // Pipes
    PkmnTypeColorPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
