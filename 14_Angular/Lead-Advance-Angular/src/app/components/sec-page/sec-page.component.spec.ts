import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecPageComponent } from './sec-page.component';

describe('SecPageComponent', () => {
  let component: SecPageComponent;
  let fixture: ComponentFixture<SecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
