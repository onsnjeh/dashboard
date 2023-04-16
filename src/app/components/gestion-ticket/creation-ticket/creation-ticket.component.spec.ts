import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrationTicketComponent } from './cration-ticket.component';

describe('CrationTicketComponent', () => {
  let component: CrationTicketComponent;
  let fixture: ComponentFixture<CrationTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrationTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrationTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
