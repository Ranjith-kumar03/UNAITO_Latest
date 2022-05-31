import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDashboardComponent } from './project-details-dashboard.component';

describe('ProjectDetailsDashboardComponent', () => {
  let component: ProjectDetailsDashboardComponent;
  let fixture: ComponentFixture<ProjectDetailsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
