import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTitleComponent } from './footer-title.component';

describe('FooterTitleComponent', () => {
  let component: FooterTitleComponent;
  let fixture: ComponentFixture<FooterTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
