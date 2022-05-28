import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverViewComponent } from './project-over-view.component';

describe('ApplicationOverViewComponent', () => {
  let component: ProjectOverViewComponent;
  let fixture: ComponentFixture<ProjectOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
