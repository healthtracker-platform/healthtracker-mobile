import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ExploreContainerComponent} from "./explore-container.component";
import {EmotionModalComponent} from "./emotion-modal/emotion-modal.component";



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent,EmotionModalComponent],
  entryComponents:[EmotionModalComponent],
  exports: [ExploreContainerComponent]
})
export class EmotionExploreContainerComponentModule {}
