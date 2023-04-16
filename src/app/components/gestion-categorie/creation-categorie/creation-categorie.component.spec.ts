import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCategorieComponent } from './creation-categorie.component';

describe('CreationCategorieComponent', () => {
  let component: CreationCategorieComponent;
  let fixture: ComponentFixture<CreationCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
