import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDriversComponent } from './project-details-drivers.component';

describe('ProjectDetailsDriversComponent', () => {
  let component: ProjectDetailsDriversComponent;
  let fixture: ComponentFixture<ProjectDetailsDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
