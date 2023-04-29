import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPaieComponent } from './la-paie.component';

describe('LaPaieComponent', () => {
  let component: LaPaieComponent;
  let fixture: ComponentFixture<LaPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
