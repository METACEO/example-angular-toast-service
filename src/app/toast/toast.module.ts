import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';

@NgModule({
  entryComponents: [ToastComponent],
  imports: [
    CommonModule
  ]
})
export class ToastModule { }
