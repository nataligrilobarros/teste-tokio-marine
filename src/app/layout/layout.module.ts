import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [MenuComponent, RodapeComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, RodapeComponent]

})
export class LayoutModule { }
