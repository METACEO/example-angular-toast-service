import { DOCUMENT } from '@angular/common';
import { ApplicationRef, EmbeddedViewRef, Inject, Injectable, Injector, NgModuleRef } from '@angular/core';

import { ToastComponent } from './toast.component';
import { ToastModule } from './toast.module';

@Injectable()
export class ToastService {

  constructor(private readonly applicationRef: ApplicationRef,
              private readonly injector: Injector,
              private readonly toastModuleNgModuleRef: NgModuleRef<ToastModule>,
              @Inject(DOCUMENT) private readonly document: Document) {
  }

  public open(message: string): void {
    // Create the component factory that provides us the component reference:
    const componentFactory = this.toastModuleNgModuleRef.componentFactoryResolver.resolveComponentFactory(ToastComponent);
    const componentRef = componentFactory.create(this.injector);

    // Use the component reference and add it to the Angular application + DOM:
    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElem);

    // Do message:
    alert(message);

    // Remove message:
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

}
