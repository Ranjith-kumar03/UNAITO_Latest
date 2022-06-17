import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurCompiComponent } from './add-secur-compi.component';

describe('AddSecurCompiComponent', () => {
  let component: AddSecurCompiComponent;
  let fixture: ComponentFixture<AddSecurCompiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecurCompiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecurCompiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
