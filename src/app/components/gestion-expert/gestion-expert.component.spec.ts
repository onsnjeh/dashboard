import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionExpertComponent } from './gestion-expert.component';

describe('GestionExpertComponent', () => {
  let component: GestionExpertComponent;
  let fixture: ComponentFixture<GestionExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
