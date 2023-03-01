import { Injectable } from "@angular/core";
import { LoginInt } from '../../../Interfaces/login.interfaces';
import { ResponseLInt } from '../../../Interfaces/responseL.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { throwError } from "rxjs";




@Injectable({

providedIn: 'root'
})
export class LoginService{

    url: string='https://apitest.e-bango.com';


    constructor(private http:HttpClient){}


    LoginPass(form:LoginInt):Observable<ResponseLInt>{
        
        let direccion = this.url + "/api/auth/login"
        
        return this.http.post<ResponseLInt>(direccion,form);
               
    }

}