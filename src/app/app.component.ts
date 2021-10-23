import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  username = new FormControl(null, []);
  constructor(private auth: AuthService){};

  validate(username: string){
    let user: User = {email: username};
    this.auth.validate(user).subscribe(d =>{
      console.log(d);
    });
  }
}

export interface User {
  id?:string,
  email?:string,
  password?:string,
  name?:string,
  age?:string
}
