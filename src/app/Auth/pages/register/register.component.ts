import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { RegisterInt } from 'src/app/Interfaces/register.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FRegistro: FormGroup = this.fb.group({

email: ['', [Validators.required, Validators.email]],
first_name: ['', [Validators.required]],
last_name:  ['', [Validators.required]],
password:  ['', [Validators.required, Validators.minLength(5)]],
password_confirmation: ['', [Validators.required, Validators.minLength(5)]],
phone_country_code: ['', [Validators.required]],
phone: ['', [Validators.required]],
referrer_code: ['', [Validators.required]],
country_id: ['', [Validators.required, Validators.maxLength(3)]]

  })

  constructor(private fb: FormBuilder, private api:RegisterService) { }

  campoValido (campo: string){

    return this.FRegistro.controls[campo].errors && this.FRegistro.controls[campo].touched
  }

  guardar(form:RegisterInt){

    this.api.LoginPass(form).subscribe(data =>{
      console.log(data.status,"es mi console log");
      })

    
  }

  ngOnInit(): void {
  }

}
