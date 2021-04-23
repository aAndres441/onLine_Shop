import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

const MODULES = [CommonModule, AdminRoutingModule];

const COMPONENTS = [AdminComponent];


@NgModule({

  declarations: [...COMPONENTS],

  imports: [
    ...MODULES,
  ]

})
export class AdminModule { }


/* 
  exports:[
    ...MODULES
  ] */