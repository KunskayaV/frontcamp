import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userIsLogged: boolean = true;

  constructor() { }

  getUserInfo() {
    return this.userIsLogged;
  }
}
