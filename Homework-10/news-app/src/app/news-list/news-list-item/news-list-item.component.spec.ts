import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListItemComponent } from './news-list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';
import { EditPageService } from 'src/app/pages/edit-news-page/edit-page.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NewsListService } from '../news-list.service';
import { DateTransformerPipe } from 'src/app/shared/date-transformer.pipe';

describe('NewsListItemComponent', () => {
  let component: NewsListItemComponent;
  let fixture: ComponentFixture<NewsListItemComponent>;
  const userSpy = {
    'getUserInfo': jasmine.createSpy(),
    'updateIsUserLoggedStatus': {
      'subscribe': jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };
  const apiSpy = {
    'deleteMyNews': { 'subscribe': jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      })
    }
  };
  const editSpy = jasmine.createSpyObj('EditPageService', ['setEditItem']);
  const newsSpy = jasmine.createSpyObj('NewsListService', ['setViewItem']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListItemComponent, DateTransformerPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserInfoService, useValue: userSpy },
        { provide: EditPageService, useValue: editSpy },
        { provide: ApiService, useValue: apiSpy },
        { provide: NewsListService, useValue: newsSpy },
        { provide: Router, useValue: routerSpy },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListItemComponent);
    component = fixture.componentInstance;
    component.itemInfo = { id: 'custom ' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
