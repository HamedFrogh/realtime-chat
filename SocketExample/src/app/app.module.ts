import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; // New API for HTTP client
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SocketService } from "./socket.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    SocketService,
    provideHttpClient(), // Configure the HTTP client
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
