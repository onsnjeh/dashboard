import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTagsComponent } from './ajouter-tags.component';

describe('AjouterTagsComponent', () => {
  let component: AjouterTagsComponent;
  let fixture: ComponentFixture<AjouterTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
