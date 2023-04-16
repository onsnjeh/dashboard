import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPartenairesComponent } from './ajouter-partenaires.component';

describe('AjouterPartenairesComponent', () => {
  let component: AjouterPartenairesComponent;
  let fixture: ComponentFixture<AjouterPartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPartenairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
