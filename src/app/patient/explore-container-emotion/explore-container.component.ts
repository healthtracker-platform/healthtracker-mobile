import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {WaistModalComponent} from "../explore-container-waist/waist-modal/waist-modal.component";
import {EmotionModalComponent} from "./emotion-modal/emotion-modal.component";
import {of} from "rxjs";
import {RegisterService} from "@shared/services/register.service";
import {AuthService} from "@core/auth.service";

@Component({
  selector: 'app-explore-container-emotion',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  modal: HTMLElement;
  registers$= of([]);

  constructor(public modalController: ModalController, public registerService: RegisterService, public authService: AuthService) { }

  ngOnInit() {
    this.updateTable();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EmotionModalComponent
    });

    await modal.present()

    return  await modal.onWillDismiss().then(() => {
      this.updateTable();
    });
  }

  updateTable(){
    this.registers$= of([]);
    this.registers$ = this.registerService.searchEmotionByName(this.authService.getName());
  }

}
