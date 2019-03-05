import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: {name: string; age: number; id: string};

  constructor(
    private activateRoute: ActivatedRoute,
    private usersStorageService: UserStorageService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params)  => {
      
      this.user = this.usersStorageService.getUserById(params.id)
    }

    );
  }

}
