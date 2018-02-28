import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EasyModalComponent } from './easy-modal/easy-modal.component';
import { EasyModalService } from './easy-modal/easy-modal.service';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { EasyModalInstanceService } from './easy-modal/easy-modal-instance.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    EasyModalComponent,
    DemoModalComponent
  ],
  entryComponents: [
    EasyModalComponent
  ],
  providers: [
    EasyModalService,
    EasyModalInstanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
