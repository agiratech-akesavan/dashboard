import { TestBed } from '@angular/core/testing';

import { DashboardtitleService } from './dashboardtitle.service';

describe('DashboardtitleService', () => {
  let service: DashboardtitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardtitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
