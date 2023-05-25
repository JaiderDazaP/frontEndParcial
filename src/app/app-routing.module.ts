import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'listar', component:ListarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
