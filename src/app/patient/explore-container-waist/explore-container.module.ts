import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {WaistExploreContainerComponent} from "./explore-container.component";
import {WaistModalComponent} from "./waist-modal/waist-modal.component";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [WaistExploreContainerComponent,WaistModalComponent],
  entryComponents:[WaistModalComponent],
  exports: [WaistExploreContainerComponent]
})
export class WaistExploreContainerComponentModule {}
