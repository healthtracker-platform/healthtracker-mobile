import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {WaistModalComponent} from "./waist-modal/waist-modal.component";
import {of} from "rxjs";
import {RegisterService} from "@shared/services/register.service";
import {AuthService} from "@core/auth.service";
import {WeigthModalComponent} from "../explore-container-weight/weigth-modal/weigth-modal.component";

@Component({
  selector: 'app-explore-container-waist',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class WaistExploreContainerComponent implements OnInit {
  modal: HTMLElement;
  registers$= of([]);

  constructor(public modalController: ModalController, public registerService: RegisterService, public authService: AuthService) { }

  ngOnInit() {
    this.updateTable();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: WaistModalComponent
    });

    await modal.present()

    return  await modal.onWillDismiss().then(() => {
      this.updateTable();
    });
  }

  updateTable(){
    this.registers$= of([]);
    this.registers$ = this.registerService.searchWaistByName(this.authService.getName());
  }

}
