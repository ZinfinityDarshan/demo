import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = '' ;
  constructor(private http: HttpClient) { }

  validate(user: User){
    return this.http.post(this.url, user)
  }
}
