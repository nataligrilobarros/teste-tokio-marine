import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioModule } from './usuario/usuario.module';

const routes: Routes = [
    {
      path: 'usuarios',
      loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
    }  

];

@NgModule({
  imports: [ 
     CommonModule,      
     RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
