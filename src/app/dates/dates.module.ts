import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekPickerComponent } from './week-picker/week-picker.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    WeekPickerComponent
  ],
  exports: [
    WeekPickerComponent
  ]
})
export class DatesModule { }
