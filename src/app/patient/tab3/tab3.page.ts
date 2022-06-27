import { Component } from '@angular/core';
import {AuthService} from "@core/auth.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public authService: AuthService) {}

  logOut(){
    this.authService.logout()
  }
}
