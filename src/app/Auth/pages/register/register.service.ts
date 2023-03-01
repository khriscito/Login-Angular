import { Injectable } from "@angular/core";
import { LoginInt } from '../../../Interfaces/login.interfaces';
import { ResponseRInt } from '../../../Interfaces/responseR.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";




@Injectable({

providedIn: 'root'
})
export class RegisterService{

    url: string='https://apitest.e-bango.com';


    constructor(private http:HttpClient){}


    LoginPass(form:LoginInt):Observable<ResponseRInt>{
        
        let direccion = this.url + "/api/auth/create"
        
        return this.http.post<ResponseRInt>(direccion,form)
    }
}