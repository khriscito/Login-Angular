import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class AuthModule { }
