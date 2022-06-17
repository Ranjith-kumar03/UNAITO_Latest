import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationValidationComponent } from './information-validation.component';

describe('InformationValidationComponent', () => {
  let component: InformationValidationComponent;
  let fixture: ComponentFixture<InformationValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
