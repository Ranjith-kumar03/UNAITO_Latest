import { TestBed } from '@angular/core/testing';

import { ToasterNotificatonService } from './toaster.notificaton.service';

describe('ToasterService', () => {
  let service: ToasterNotificatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterNotificatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
