import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ez-modal',
  templateUrl: './easy-modal.component.html',
  styleUrls: ['./easy-modal.component.scss']
})
export class EasyModalComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit() { }

}
