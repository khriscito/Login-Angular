import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginInt } from 'src/app/Interfaces/login.interfaces';
import { ResponseLInt } from 'src/app/Interfaces/responseL.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FLogin: FormGroup = this.fb.group({ 

email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(5)]]
  }
    )

  constructor(private fb: FormBuilder, private api:LoginService) { }


  campoValido (campo: string){

    return this.FLogin.controls[campo].errors && this.FLogin.controls[campo].touched

  }
errorStatus:boolean = false;
mensajeError:any = '';


  guardar(form:LoginInt){

    this.api.LoginPass(form).subscribe(data =>{

      let dataReponse: ResponseLInt = data;
      console.log(data);

 if(dataReponse.code != 200){
      this.errorStatus = true;
      this.mensajeError = dataReponse.errors}
      else{
        localStorage.setItem("token", dataReponse.errors.token)
        
      ;}
      },

      
      )

    
  }
  ngOnInit(): void {
  }

}


