import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTypeThemeComponent } from './creer-type-theme.component';

describe('CreerTypeThemeComponent', () => {
  let component: CreerTypeThemeComponent;
  let fixture: ComponentFixture<CreerTypeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerTypeThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerTypeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
