import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EasyModalModule } from './easy-modal/easy-modal.module';

import { AppComponent } from './app.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    EasyModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DemoModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
