import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'registro',
  loadChildren: () => import('./registro/registro.module').then( m => m.RegistroModule) 
}, 
{
  path:'listado',
  loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule ) 
},
{
  path:'**', redirectTo: 'registro'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
