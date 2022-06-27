import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {WeightExploreContainerComponent} from './explore-container.component';
import {WeigthModalComponent} from "./weigth-modal/weigth-modal.component";



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [WeightExploreContainerComponent,WeigthModalComponent],
  entryComponents:[WeigthModalComponent],
  exports: [WeightExploreContainerComponent]
})
export class WeightExploreContainerComponentModule {}
