import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { EasyModalService } from './easy-modal.service';
import { EasyModalInstanceService } from './easy-modal-instance.service';

@Component({
  selector: 'ez-modal',
  templateUrl: './easy-modal.component.html',
  styleUrls: ['./easy-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EasyModalComponent {

  public template: TemplateRef<any>;
  public height = 300;
  public width = 500;

  constructor(
    private easyModalInstanceService: EasyModalInstanceService
  ) { }

  close() {
    this.easyModalInstanceService.destroy();
  }
}
