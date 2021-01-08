import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {

  usuario: UsuarioModel;
  lat: number;
  lng: number;


  constructor(private routerActive: ActivatedRoute, private usuarioServico:UsuariosService ) { }

  ngOnInit() {

     this.routerActive.params.subscribe(parametros => {
      if(parametros.hasOwnProperty('id')){

          this.usuarioServico.buscarDetalhesUsuario(+parametros['id']).subscribe(retorno => {
              this.usuario = retorno;
              this.lat = +this.usuario.address.geo.lat;
              this.lng = +this.usuario.address.geo.lng;
          });
      }
    });

  }

}
