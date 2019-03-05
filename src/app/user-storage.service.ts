import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  public users = [
    {
      name: 'First',
      age: 23,
      id: '1'
    },
    {
      name: 'Second',
      age: 12,
      id: '2'
    },
    {
      name: 'Third',
      age: 16,
      id: '3'
    }
  ];

  constructor() { }

  public getUsers() {
    return this.users;
  }
public getUserById(id) {
  const result = this.users.find((user) => {
    return user.id === id;
  });

  if (result === undefined) {
    return this.users[0];
  }

  return result;

}

}
