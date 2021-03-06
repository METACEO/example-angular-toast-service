import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [
    ToastComponent
  ],
  entryComponents: [
    ToastComponent
  ],
  providers: [
    ToastService
  ],
  imports: [
    CommonModule
  ]
})
export class ToastModule { }
