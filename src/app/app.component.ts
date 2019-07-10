import { Component } from '@angular/core';

import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-angular-toast-service';

  constructor(private readonly toastService: ToastService) {
  }

  public doToast(): void {
    this.toastService.open('doToast');
  }
}
