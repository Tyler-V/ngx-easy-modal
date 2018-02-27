import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyModalComponent } from './easy-modal/easy-modal.component';
import { EasyModalService } from './easy-modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EasyModalComponent
  ],
  providers: [
    EasyModalService
  ]
})
export class NgxEasyModalModule { }
