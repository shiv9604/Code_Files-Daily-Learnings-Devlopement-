import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenwellPageComponent } from './senwell-page.component';

describe('SenwellPageComponent', () => {
  let component: SenwellPageComponent;
  let fixture: ComponentFixture<SenwellPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenwellPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenwellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
