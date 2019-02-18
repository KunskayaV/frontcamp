import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFilterGroupComponent } from './text-filter-group.component';

describe('TextFilterGroupComponent', () => {
  let component: TextFilterGroupComponent;
  let fixture: ComponentFixture<TextFilterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFilterGroupComponent ]
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
