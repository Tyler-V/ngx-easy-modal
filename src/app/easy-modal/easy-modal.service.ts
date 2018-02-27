import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ChangeDetectorRef
} from '@angular/core';

@Injectable()
export class EasyModalService {

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  open(component: any) {
    // 1. Create a component reference from the component 
    const componentRef = this.cfr
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get host element
    const hostRef = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append to body
    document.body.appendChild(hostRef);
  }
}
