import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  login(): void {
    this.auth.login(this.email, this.password).subscribe(
      () => {
        if (this.auth.isPatient()) {
          this.email="";
          this.password="";
          this.router.navigate(['patient']);
        }
      }
    );
  }
}
