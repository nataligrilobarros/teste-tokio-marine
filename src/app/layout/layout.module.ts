import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [MenuComponent, RodapeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [MenuComponent, RodapeComponent]

})
export class LayoutModule { }
