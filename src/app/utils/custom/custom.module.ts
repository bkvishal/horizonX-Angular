import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CustomMaterialModule { }
