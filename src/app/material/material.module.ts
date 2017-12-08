import { NgModule } from "@angular/core";
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule } from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class MaterialModule { }