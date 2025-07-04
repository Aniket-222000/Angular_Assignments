import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  
  users:undefined|string[];
  handleUsers(users:string[])
  {
    console.log( users);
    this.users=users;
  }
  
}
