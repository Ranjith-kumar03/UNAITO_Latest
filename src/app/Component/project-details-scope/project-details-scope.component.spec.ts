import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsScopeComponent } from './project-details-scope.component';

describe('ProjectDetailsScopeComponent', () => {
  let component: ProjectDetailsScopeComponent;
  let fixture: ComponentFixture<ProjectDetailsScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
