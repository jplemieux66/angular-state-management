import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekPickerComponent } from './week-picker/week-picker.component';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    WeekPickerComponent
  ],
  exports: [
    WeekPickerComponent
  ]
})
export class DatesModule { }
