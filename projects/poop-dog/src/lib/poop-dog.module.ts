import { NgModule } from '@angular/core';
import { PoopDogComponent } from './poop-dog.component';
import { PoopDogProgressBarComponent } from './components/poop-dog-progress-bar.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    PoopDogComponent,
    PoopDogProgressBarComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    PoopDogComponent,
    PoopDogProgressBarComponent
  ]
})
export class PoopDogModule { }
