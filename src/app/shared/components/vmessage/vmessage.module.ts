import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VMessageComponent } from './vmessage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VMessageComponent],
  exports: [VMessageComponent]
})
export class VMessageModule { }
