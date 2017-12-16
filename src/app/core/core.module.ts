import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class CoreModule { }
