import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriversComponent } from './edit-drivers.component';

describe('EditDriversComponent', () => {
  let component: EditDriversComponent;
  let fixture: ComponentFixture<EditDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
