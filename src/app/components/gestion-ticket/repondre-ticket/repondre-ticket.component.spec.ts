import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreTicketComponent } from './repondre-ticket.component';

describe('RepondreTicketComponent', () => {
  let component: RepondreTicketComponent;
  let fixture: ComponentFixture<RepondreTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepondreTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepondreTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
