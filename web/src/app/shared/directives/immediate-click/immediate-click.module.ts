import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmediateClickDirective } from './immediate-click.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ImmediateClickDirective],
  exports: [ImmediateClickDirective],
})
export class ImmediateClickModule {}
