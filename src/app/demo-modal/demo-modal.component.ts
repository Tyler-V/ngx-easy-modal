import { Component, OnInit, ViewChild } from '@angular/core';
import { EasyModalService } from '../easy-modal/easy-modal.service';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {

  @ViewChild('template') template;

  public text = 'Hello I am a dynamic template generated in a dynamic component!';

  constructor(public modalService: EasyModalService) { }

  ngOnInit() { }

  open() {
    this.modalService.open(this.template);
  }

  onClick() {
    console.log('Click!');
  }
}
