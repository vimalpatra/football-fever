import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SpinnerComponent
  ]
})

export class SharedModule { }
