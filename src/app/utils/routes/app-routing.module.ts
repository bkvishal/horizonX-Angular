import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../core/app/home/home.component";
import {MainComponent} from "../../core/app/main/main.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'main', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
