import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from 'lodash';

import { FilterPanelComponent } from './filter-panel.component';
import { FilterBarService } from '../filter-bar.service';
import { UserInfoService } from 'src/app/user-info.service';
import { EditPageService } from 'src/app/pages/edit-news-page/edit-page.service';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  const unsubscribeObject = {
    unsubscribe: jasmine.createSpy(),
  };
  const userSpy = {
    'getUserInfo': jasmine.createSpy().and.returnValue(true),
    'updateIsUserLoggedStatus': {
      'subscribe': jasmine.createSpy().and.returnValue(unsubscribeObject),
    }
  };
  const editSpy = jasmine.createSpyObj('EditPageService', ['setEditItem']);
  const filterSpy = jasmine.createSpyObj(
    'FilterBarService',
    {
      'fetchSources': jasmine.createSpy(),
      'getSources': jasmine.createSpy(),
      'getCustomFilter': jasmine.createSpy().and.returnValue(true),
      'getPickedSourceName': jasmine.createSpy(),
      'setCustomFilter': jasmine.createSpy(),
      'applyFilters': jasmine.createSpy(),
      'setPickedSource': jasmine.createSpy(),
    }
  );
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPanelComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
        { provide: UserInfoService, useValue: userSpy },
        { provide: EditPageService, useValue: editSpy },
        { provide: FilterBarService, useValue: filterSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    unsubscribeObject.unsubscribe.calls.reset();
    userSpy.updateIsUserLoggedStatus.subscribe.calls.reset();
    userSpy.getUserInfo.calls.reset();
    forEach(filterSpy, method => method.calls.reset());
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call all required service methods on init', () => {
    component.ngOnInit();
    expect(filterSpy.fetchSources).toHaveBeenCalled();

    expect(filterSpy.getCustomFilter).toHaveBeenCalled();
    expect(component.showOnlyMyNews).toBeTruthy();

    expect(userSpy.getUserInfo).toHaveBeenCalled();
    expect(component.isUserLogged).toBeTruthy();

    expect(userSpy.updateIsUserLoggedStatus.subscribe).toHaveBeenCalled();
  });

  it('should call unsubscribe on destroy', () => {
    component.ngOnDestroy();

    expect(unsubscribeObject.unsubscribe).toHaveBeenCalled();
  });
});
