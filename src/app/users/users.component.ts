import { Component, OnInit } from '@angular/core';
import {UserStorageService} from '../user-storage.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];

  constructor(private userStorageSErvice: UserStorageService) { }

  ngOnInit() {
    this.users = this.userStorageSErvice.getUsers();
  }

}
