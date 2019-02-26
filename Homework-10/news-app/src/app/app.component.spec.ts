import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserInfoService } from './user-info.service';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let userInfoServiceSpy: jasmine.SpyObj<UserInfoService>;

  const spy = jasmine.createSpyObj('UserInfoService', ['getUserInfo']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [ 
       { provide: UserInfoService, useValue: spy }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'news-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('news-app');
  });

  it('should call userService @getUserInfo on init', () => {
    userInfoServiceSpy = TestBed.get(UserInfoService);
    const stubValue = false;
    userInfoServiceSpy.getUserInfo.and.returnValue(stubValue);
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(userInfoServiceSpy.getUserInfo).toHaveBeenCalled();
    expect(app.isUserLogged).toBe(stubValue);
  });
});
