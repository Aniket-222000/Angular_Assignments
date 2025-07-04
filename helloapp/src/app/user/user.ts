import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  @Output() getUsers = new EventEmitter();
  users = ["Aniket", "Kaushal"]

  loadData() {
    this.getUsers.emit(this.users);
  }
}
