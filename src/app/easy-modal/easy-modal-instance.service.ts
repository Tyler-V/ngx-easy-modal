import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EasyModalInstanceService {

  public closeEvent = new EventEmitter<any>();

  constructor() { }

}
