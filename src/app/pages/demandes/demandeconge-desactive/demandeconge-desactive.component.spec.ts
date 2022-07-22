import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecongeDesactiveComponent } from './demandeconge-desactive.component';

describe('DemandecongeDesactiveComponent', () => {
  let component: DemandecongeDesactiveComponent;
  let fixture: ComponentFixture<DemandecongeDesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecongeDesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecongeDesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
