
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
  
  userRole :'admin' | 'guest' | 'user' = 'admin'



  

}
