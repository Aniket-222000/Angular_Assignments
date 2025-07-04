import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceFormatPipe } from './price-format-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PriceFormatPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  price = 1499;
}
