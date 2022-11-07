import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public token: string;
  public allowCookies: boolean;
  public logged: boolean;
  public user = {email: '', password: 'password'}
  public users = {prenom: "", nom: "", address:"", email: "", password: "", confirmPassword: "", zipcode: ""}

  constructor(private http: HttpClient) { }
  
register(request: any) {
  return this.http.post('http://localhost:3000/users', request)
}

login(request: any) {
  return this.http.post('http://localhost:3000/login', request, { withCredentials: true })
}
userProfile(request: any) {
  var header = new HttpHeaders(('Authorization:'+ this.token))
  return this.http.post('http://localhost:3000/usersProfile', request,  { 'headers': header, withCredentials: true})
  
}
updateProfile(request: any) {
  var header = new HttpHeaders('Authorization:' + this.token)
  return this.http.put('http://localhost:3000/updateProfil', request, { 'headers': header,  withCredentials: true})
}
}
