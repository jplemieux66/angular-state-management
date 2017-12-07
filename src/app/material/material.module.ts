import { NgModule } from "@angular/core";
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }