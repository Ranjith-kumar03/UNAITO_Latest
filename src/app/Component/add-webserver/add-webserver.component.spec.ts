import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebserverComponent } from './add-webserver.component';

describe('AddWebserverComponent', () => {
  let component: AddWebserverComponent;
  let fixture: ComponentFixture<AddWebserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWebserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWebserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
