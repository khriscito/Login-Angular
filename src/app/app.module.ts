import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LoginComponent } from './Auth/pages/login/login.component';
import {HttpClientModule} from  '@angular/common/http'
import { RegisterComponent } from './Auth/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
