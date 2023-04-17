import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionManagerExpertComponent } from './gestion-manager-expert.component';

describe('GestionManagerExpertComponent', () => {
  let component: GestionManagerExpertComponent;
  let fixture: ComponentFixture<GestionManagerExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionManagerExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionManagerExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
