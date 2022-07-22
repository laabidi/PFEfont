import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinfopersoDesactiveComponent } from './demandeinfoperso-desactive.component';

describe('DemandeinfopersoDesactiveComponent', () => {
  let component: DemandeinfopersoDesactiveComponent;
  let fixture: ComponentFixture<DemandeinfopersoDesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinfopersoDesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeinfopersoDesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
