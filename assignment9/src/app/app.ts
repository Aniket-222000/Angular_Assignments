import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  blogs = [
    'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5',
    'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10'
  ];

  pageSize = 5;   // items per page
  start = 0;      // starting index
  end = this.pageSize;

  nextPage() {
    if (this.end < this.blogs.length) {
      this.start += this.pageSize;
      this.end += this.pageSize;
    }
  }

  prevPage() {
    if (this.start > 0) {
      this.start -= this.pageSize;
      this.end -= this.pageSize;
    }
  }
}
