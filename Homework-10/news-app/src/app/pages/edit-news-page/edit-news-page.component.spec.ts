import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsPageComponent } from './edit-news-page.component';

describe('EditNewsPageComponent', () => {
  let component: EditNewsPageComponent;
  let fixture: ComponentFixture<EditNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsPageComponent ]
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
