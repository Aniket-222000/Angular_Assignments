import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  cartForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl('')
  });
  
  displayData()
  {
    console.log(this.cartForm.value);
  }
}
