import { Component } from '@angular/core';
import { EasyModalService } from './easy-modal.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'ez-modal',
  templateUrl: './easy-modal.component.html',
  styleUrls: ['./easy-modal.component.scss']
})
export class EasyModalComponent {

  constructor(public modalService: EasyModalService) { }

  open() {
    this.modalService.open(DynamicComponent);
  }
}

