import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { EasyModalComponent } from './easy-modal/easy-modal.component';
import { EasyModalService } from './easy-modal/easy-modal.service';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { EasyModalInstanceService } from './easy-modal/easy-modal-instance.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
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
