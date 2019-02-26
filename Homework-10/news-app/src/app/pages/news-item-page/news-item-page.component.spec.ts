import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemPageComponent } from './news-item-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/user-info.service';
import { EditPageService } from '../edit-news-page/edit-page.service';
import { NewsItemPageService } from './news-item-page.service';
import { DateTransformerPipe } from 'src/app/shared/date-transformer.pipe';

describe('NewsItemPageComponent', () => {
  let component: NewsItemPageComponent;
  let fixture: ComponentFixture<NewsItemPageComponent>;

  const userSpy = {
    getUserInfo: jasmine.createSpy(),
    'updateIsUserLoggedStatus': {
      'subscribe': jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };
  const editSpy = jasmine.createSpyObj('EditPageService', ['setEditItem']);
  const newsPageSpy = {
    getViewItem: jasmine.createSpy().and.returnValue({ id: 'custom '}),
  }
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
      declarations: [ NewsItemPageComponent, DateTransformerPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
        { provide: UserInfoService, useValue: userSpy },
        { provide: EditPageService, useValue: editSpy },
        { provide: NewsItemPageService, useValue: newsPageSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: routeSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
