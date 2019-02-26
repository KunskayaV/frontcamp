import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';
import { FilterBarService } from 'src/app/filter-bar/filter-bar.service';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  const userSpy = {
    getUserInfo: jasmine.createSpy(),
    'updateIsUserLoggedStatus': {
      'subscribe': jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };
  const filterSpy = jasmine.createSpyObj('FilterBarService', ['getPickedSourceName']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
        { provide: UserInfoService, useValue: userSpy },
        { provide: FilterBarService, useValue: filterSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
