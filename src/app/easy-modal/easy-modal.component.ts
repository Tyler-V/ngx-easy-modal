import { Component, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EasyModalService } from './easy-modal.service';
import { EasyModalInstanceService } from './easy-modal-instance.service';

@Component({
  selector: 'ez-modal',
  templateUrl: './easy-modal.component.html',
  styleUrls: ['./easy-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyModalComponent {

  public componentRef: any;
  public template: TemplateRef<any>;
  public height = 300;
  public width = 500;

  constructor(private modalInstanceService: EasyModalInstanceService) { }

  close() {
    this.modalInstanceService.closeEvent.emit();
  }
}
