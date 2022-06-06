import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationOverviewDetailsComponent } from './add-application-overview-details.component';

describe('AddApplicationOverviewDetailsComponent', () => {
  let component: AddApplicationOverviewDetailsComponent;
  let fixture: ComponentFixture<AddApplicationOverviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationOverviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
