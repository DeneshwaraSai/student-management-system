import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StudentDashboardComponent } from './student-dashboard.component';

@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [StudentDashboardComponent]
})
export class StudentDashboardModule { }
