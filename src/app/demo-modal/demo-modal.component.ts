import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { EasyModalService } from '../easy-modal/easy-modal.service';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;

  constructor(public modalService: EasyModalService) { }

  ngOnInit() { }

  open() {
    this.modalService.create(this.template);
  }

  close() {
    this.modalService.destroy();
  }
}
