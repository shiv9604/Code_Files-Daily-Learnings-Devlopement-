import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNameComponent } from './counter-name.component';

describe('CounterNameComponent', () => {
  let component: CounterNameComponent;
  let fixture: ComponentFixture<CounterNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
