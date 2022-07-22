import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireViewComponent } from './formulaire-view.component';

describe('FormulaireViewComponent', () => {
  let component: FormulaireViewComponent;
  let fixture: ComponentFixture<FormulaireViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
