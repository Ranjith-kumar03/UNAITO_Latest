import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBusyComponent } from './loader-busy.component';

describe('LoaderBusyComponent', () => {
  let component: LoaderBusyComponent;
  let fixture: ComponentFixture<LoaderBusyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderBusyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderBusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
