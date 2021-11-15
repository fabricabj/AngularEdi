import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  public setLogin(jwt: any){
    localStorage.setItem('token', jwt)
  }

  public logOut(){
    localStorage.removeItem('token');
    window.location.href = "/login";
  }

  public getToken(){
     if(localStorage.getItem('token')){
       return true;
     }else{
       return false;
     }
  }

  constructor() {}

}
