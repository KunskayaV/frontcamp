import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private isUserLogged: boolean = true;

  updateIsUserLoggedStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  getUserInfo() {
    return this.isUserLogged;
  }

  changeIsUserLogged(loggedStatus: boolean) {
    this.isUserLogged = loggedStatus;
    this.updateIsUserLoggedStatus.emit(this.isUserLogged);
  }
}
