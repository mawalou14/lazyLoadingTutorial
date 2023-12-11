import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AminRoutingModule } from './amin-routing.module';

console.warn("Admin module is Loading...")

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AminRoutingModule
  ]
})
export class AminModule { }
