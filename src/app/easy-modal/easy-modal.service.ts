import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, TemplateRef, ComponentRef, OnDestroy } from '@angular/core';
import { EasyModalComponent } from './easy-modal.component';
import { EasyModalInstanceService } from './easy-modal-instance.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class EasyModalService implements OnDestroy {

  private _componentRef: ComponentRef<EasyModalComponent>;
  private _closeSubscription: Subscription;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private modalInstanceService: EasyModalInstanceService) {
    this._closeSubscription = this.modalInstanceService.closeEvent.subscribe(() => {
      this.destroy();
    })
  }

  ngOnDestroy() {
    this._closeSubscription.unsubscribe();
    this.destroy();
  }

  create(template: TemplateRef<any>) {
    this._componentRef = this.cfr
      .resolveComponentFactory(EasyModalComponent)
      .create(this.injector);

    const instance: EasyModalComponent = this._componentRef.instance as EasyModalComponent;
    instance.componentRef = this._componentRef;
    instance.template = template;

    this.appRef.attachView(this._componentRef.hostView);

    const hostRef = (this._componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(hostRef);
  }

  destroy() {
    this.appRef.detachView(this._componentRef.hostView);
    this._componentRef.destroy();
  }
}
