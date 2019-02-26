import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NewsListService } from '../news-list.service';
import { FilterBarService } from 'src/app/filter-bar/filter-bar.service';
import { FilterNewsPipe } from '../filter-news.pipe';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  const filterSpy = {
    'getTextFilter': jasmine.createSpy(),
    'getCustomFilter': jasmine.createSpy(),
    apply: {
      subscribe: jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    },
    sourceShanged: {
      subscribe: jasmine.createSpy().and.returnValue({
        unsubscribe: jasmine.createSpy(),
      }),
    }
  };
  const newsSpy = jasmine.createSpyObj(
    'NewsListService',
    ['loadMore', 'getNews', 'getMyNews', 'changeNewsSource']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListComponent, FilterNewsPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: NewsListService, useValue: newsSpy },
        { provide: FilterBarService, useValue: filterSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
