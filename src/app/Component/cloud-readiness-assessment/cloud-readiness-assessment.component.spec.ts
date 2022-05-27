import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudReadinessAssessmentComponent } from './cloud-readiness-assessment.component';

describe('CloudReadinessAssessmentComponent', () => {
  let component: CloudReadinessAssessmentComponent;
  let fixture: ComponentFixture<CloudReadinessAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudReadinessAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudReadinessAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
