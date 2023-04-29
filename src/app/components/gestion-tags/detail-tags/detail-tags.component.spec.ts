import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTagsComponent } from './detail-tags.component';

describe('DetailTagsComponent', () => {
  let component: DetailTagsComponent;
  let fixture: ComponentFixture<DetailTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
