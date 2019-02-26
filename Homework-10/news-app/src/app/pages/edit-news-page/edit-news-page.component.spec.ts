import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsPageComponent } from './edit-news-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EditPageService } from './edit-page.service';
import { ApiService } from 'src/app/api.service';

describe('EditNewsPageComponent', () => {
  let component: EditNewsPageComponent;
  let fixture: ComponentFixture<EditNewsPageComponent>;

  const userSpy = {
    'updateIsUserLoggedStatus': {
      'subscribe': jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };
  const editSpy = jasmine.createSpyObj('EditPageService', ['getEditItem']);
  const apiSpy = {
    postMyNews: jasmine.createSpy(),
    putMyNews: jasmine.createSpy(),
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const routeSpy = {
    params: {
      subscribe: jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsPageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
        { provide: UserInfoService, useValue: userSpy },
        { provide: EditPageService, useValue: editSpy },
        { provide: ApiService, useValue: apiSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: routeSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
