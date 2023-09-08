import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "taches", component: ListTachesComponent},
  {path: "**", component: Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
