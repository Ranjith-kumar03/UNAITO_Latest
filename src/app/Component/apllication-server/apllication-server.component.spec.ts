import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApllicationServerComponent } from './apllication-server.component';

describe('ApllicationServerComponent', () => {
  let component: ApllicationServerComponent;
  let fixture: ComponentFixture<ApllicationServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApllicationServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApllicationServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
