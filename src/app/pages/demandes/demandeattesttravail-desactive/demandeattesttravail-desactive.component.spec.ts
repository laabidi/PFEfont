import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeattesttravailDesactiveComponent } from './demandeattesttravail-desactive.component';

describe('DemandeattesttravailDesactiveComponent', () => {
  let component: DemandeattesttravailDesactiveComponent;
  let fixture: ComponentFixture<DemandeattesttravailDesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeattesttravailDesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeattesttravailDesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
