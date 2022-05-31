import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentProjectplanComponent } from './assessment-projectplan.component';

describe('AssessmentProjectplanComponent', () => {
  let component: AssessmentProjectplanComponent;
  let fixture: ComponentFixture<AssessmentProjectplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentProjectplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentProjectplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
