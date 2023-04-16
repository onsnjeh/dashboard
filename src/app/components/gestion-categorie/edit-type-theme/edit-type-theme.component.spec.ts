import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeThemeComponent } from './edit-type-theme.component';

describe('EditTypeThemeComponent', () => {
  let component: EditTypeThemeComponent;
  let fixture: ComponentFixture<EditTypeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
