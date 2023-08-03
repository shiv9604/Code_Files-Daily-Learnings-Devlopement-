import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecodeTodosComponent } from './typecode-todos.component';

describe('TypecodeTodosComponent', () => {
  let component: TypecodeTodosComponent;
  let fixture: ComponentFixture<TypecodeTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecodeTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecodeTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
