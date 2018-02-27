import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { EasyModalComponent } from './easy-modal.component';

@Injectable()
export class EasyModalService {

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) { }

  open(template: TemplateRef<any>) {
    const componentFactory = this.cfr.resolveComponentFactory(EasyModalComponent);

    // 1. Create a component reference from the component
    const componentRef = this.cfr
      .resolveComponentFactory(EasyModalComponent)
      .create(this.injector);

    const instance: EasyModalComponent = componentRef.instance as EasyModalComponent;
    instance.template = template;

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get host element
    const hostRef = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append to body
    document.body.appendChild(hostRef);
  }
}
