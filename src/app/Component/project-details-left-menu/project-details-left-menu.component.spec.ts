import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsLeftMenuComponent } from './project-details-left-menu.component';

describe('ProjectDetailsLeftMenuComponent', () => {
  let component: ProjectDetailsLeftMenuComponent;
  let fixture: ComponentFixture<ProjectDetailsLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
