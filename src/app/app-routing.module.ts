import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./todo-app/adapters/primary/ui/home/home.component";
import {ListComponent} from "./todo-app/adapters/primary/ui/list/list.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todo-list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
