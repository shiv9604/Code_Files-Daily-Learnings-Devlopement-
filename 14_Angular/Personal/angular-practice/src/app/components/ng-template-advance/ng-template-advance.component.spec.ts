import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateAdvanceComponent } from './ng-template-advance.component';

describe('NgTemplateAdvanceComponent', () => {
  let component: NgTemplateAdvanceComponent;
  let fixture: ComponentFixture<NgTemplateAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
