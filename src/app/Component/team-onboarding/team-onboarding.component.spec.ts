import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOnboardingComponent } from './team-onboarding.component';

describe('TeamOnboardingComponent', () => {
  let component: TeamOnboardingComponent;
  let fixture: ComponentFixture<TeamOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
