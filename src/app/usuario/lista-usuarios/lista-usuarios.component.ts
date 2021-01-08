import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrayListaUsuarios: UsuarioModel[];

  constructor(private servicoUsuario: UsuariosService ) { }

  ngOnInit() {

    this.listarUsuarios();
  }

  listarUsuarios(){
    this.servicoUsuario.listaTodosUsuarios().subscribe(lista => {
      this.arrayListaUsuarios = lista;
    })
  }

}
