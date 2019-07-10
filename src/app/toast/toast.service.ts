import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {

  constructor() { }

  public open(message: string): void {
    alert(message);
  }

}
