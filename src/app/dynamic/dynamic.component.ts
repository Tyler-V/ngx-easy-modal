import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onClick() {
    console.log("?");
  }
}
