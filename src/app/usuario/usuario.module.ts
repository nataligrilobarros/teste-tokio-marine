import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';

@NgModule({
  declarations: [ListaUsuariosComponent, DetalhesUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
