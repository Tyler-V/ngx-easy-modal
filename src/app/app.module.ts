import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EasyModalService } from './easy-modal/easy-modal.service';
import { EasyModalComponent } from './easy-modal/easy-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    EasyModalComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    DynamicComponent
  ],
  providers: [
    EasyModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
