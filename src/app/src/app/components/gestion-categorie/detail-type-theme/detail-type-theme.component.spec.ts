import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeThemeComponent } from './detail-type-theme.component';

describe('DetailTypeThemeComponent', () => {
  let component: DetailTypeThemeComponent;
  let fixture: ComponentFixture<DetailTypeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTypeThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTypeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
