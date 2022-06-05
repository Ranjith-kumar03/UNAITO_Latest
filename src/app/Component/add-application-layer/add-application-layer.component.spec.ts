import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationLayerComponent } from './add-application-layer.component';

describe('AddApplicationLayerComponent', () => {
  let component: AddApplicationLayerComponent;
  let fixture: ComponentFixture<AddApplicationLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
