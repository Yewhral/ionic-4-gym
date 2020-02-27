import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingContainerComponent } from './training-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [TrainingContainerComponent],
  exports: [TrainingContainerComponent]
})
export class TrainingContainerComponentModule {}
