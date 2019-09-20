import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
