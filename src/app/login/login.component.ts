import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent {
  message: string = "Use pika/pika to login 🤫";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "You are now logged in! 🥳";
    } else {
      this.message = "Oops, wrong credentials 🫣, Try again!";
    }
  }

  login() {
    this.message = "Attempting login ...";
    this.authService
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"]);
        } else {
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}
