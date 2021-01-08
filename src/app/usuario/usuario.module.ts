import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaUsuariosComponent, DetalhesUsuarioComponent, CadastrarUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    RouterModule
  ]
})
export class UsuarioModule { }
