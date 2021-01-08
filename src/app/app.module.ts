import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { UsuariosService } from './services/usuarios.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, 
    LayoutModule,    
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
