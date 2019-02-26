import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFilterGroupComponent } from './text-filter-group.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterBarService } from '../filter-bar.service';

describe('TextFilterGroupComponent', () => {
  let component: TextFilterGroupComponent;
  let fixture: ComponentFixture<TextFilterGroupComponent>;
  const spy = jasmine.createSpyObj(
    'FilterBarService',
    ['setTextFilter', 'applyFilters'],
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFilterGroupComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: FilterBarService, useValue: spy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
