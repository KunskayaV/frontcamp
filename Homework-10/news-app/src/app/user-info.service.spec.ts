import { TestBed } from '@angular/core/testing';

import { UserInfoService } from './user-info.service';

describe('UserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfoService = TestBed.get(UserInfoService);
    expect(service).toBeTruthy();
  });

  it('should return isUserLogged value, which is truthy by default', () => {
    const service: UserInfoService = TestBed.get(UserInfoService);

    expect(service.getUserInfo()).toBeTruthy();
  });

  it('@method changeIsUserLogged should set isUserLogged value to it\'s argument', () => {
    const service: UserInfoService = TestBed.get(UserInfoService);

    spyOn(service.updateIsUserLoggedStatus, 'emit');

    service.changeIsUserLogged(false);
    const isUserLogged = service.getUserInfo();

    expect(isUserLogged).toBeFalsy();
    expect(service.updateIsUserLoggedStatus.emit).toHaveBeenCalledWith(isUserLogged);
  });
});
