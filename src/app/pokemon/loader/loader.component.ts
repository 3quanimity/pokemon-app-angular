import { Component } from "@angular/core";

@Component({
  selector: "pokeball-loader",
  template: `
    <div class="wrapper">
      <div class="pokeball"></div>
    </div>
    <!-- <div class="content">
      <div class="pokedex">
        <div class="top">
          <div class="camera"></div>
          <div class="lights">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
        </div>
        <div class="rect"></div>
        <div class="space">
          <div class="arrow-behind"></div>
          <div class="arrow"></div>
        </div>
        <div class="scroll">
          <div class="bar">
            <div class="square-top"></div>
            <div class="square-bottom"></div>
          </div>
        </div>
        <div class="fill"></div>
        <div class="triangle"></div>
        <div class="inverse"></div>
        <div class="end">
          <div class="strip"></div>
        </div>
      </div>
      <div class="shadow"></div>
      <div class="loader">
        <div class="progress"></div>
      </div>
    </div> -->
  `,
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent {}
