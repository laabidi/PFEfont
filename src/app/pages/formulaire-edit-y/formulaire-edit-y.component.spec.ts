import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEditYComponent } from './formulaire-edit-y.component';

describe('FormulaireEditYComponent', () => {
  let component: FormulaireEditYComponent;
  let fixture: ComponentFixture<FormulaireEditYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEditYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEditYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
