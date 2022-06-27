import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController, ToastController} from "@ionic/angular";
import {RegisterService} from "../../../shared/services/register.service";
import {Register} from "../../../shared/models/register.model";
import {AuthService} from "../../../core/auth.service";


@Component({
  selector: 'app-weigth-modal',
  templateUrl: './weigth-modal.component.html',
  styleUrls: ['./weigth-modal.component.scss'],
})
export class WeigthModalComponent implements OnInit {

  register: Register;

  constructor(private actionSheetCtrl: ActionSheetController,public modalController: ModalController, public toastController: ToastController, public registerService: RegisterService, public authService: AuthService) {
    this.register = {name: this.authService.getName(), type: "weight", value: undefined, text:undefined};
  }

  ngOnInit() {
  }

  async canDismiss() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure you want to discard your changes?',
      buttons: [
        {
          text: 'Discard Changes',
          role: 'destructive'
        },
        {
          text: 'Keep Editing',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    if (role === 'destructive') {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
    return false;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your weight have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async save(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure you want to save your changes?',
      buttons: [
        {
          text: 'Yes',
          role:  'cancel'
        },
        {
          text: 'No',
          role: 'destructive'
        }
      ]
    });

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    if (role === 'cancel') {
      this.registerService.create(this.register).subscribe(()=>
      this.modalController.dismiss({
        'dismissed': true
      }));
    }
    return false;
  }

}
