import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardStylingDirective } from './card-styling.directive';
import { PkmnTypeColorPipe } from './pkmn-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardStylingDirective,
    PkmnTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
