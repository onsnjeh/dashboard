import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDocumentComponent } from './gestion-document.component';

describe('GestionDocumentComponent', () => {
  let component: GestionDocumentComponent;
  let fixture: ComponentFixture<GestionDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
