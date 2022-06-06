import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationOverviewComponent } from './add-application-overview.component';

describe('AddApplicationOverviewComponent', () => {
  let component: AddApplicationOverviewComponent;
  let fixture: ComponentFixture<AddApplicationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
