import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproposRoutingModule } from './apropos-routing.module';
import { AProposComponent } from './apropos/apropos.component';


@NgModule({
  declarations: [
    AProposComponent
  ],
  imports: [
    CommonModule,
    AproposRoutingModule
  ]
})
export class AproposModule { }
