import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './utils/routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/app/header/header.component';
import { MainComponent } from './core/app/main/main.component';
import { FooterComponent } from './core/app/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {EmsService} from "./core/services/ems.service";
import {CustomMaterialModule} from "./utils/custom/custom.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { HomeComponent } from './core/app/home/home.component';
import { AddUserDialogComponent } from './core/app/main/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AddUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    // this is added to search with specific keyword add this "npm install -save ng2-search-filter"
    Ng2SearchPipeModule,
  ],
  providers: [EmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
