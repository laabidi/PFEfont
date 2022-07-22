import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinfopersoModalComponent } from './demandeinfoperso-modal.component';

describe('DemandeinfopersoModalComponent', () => {
  let component: DemandeinfopersoModalComponent;
  let fixture: ComponentFixture<DemandeinfopersoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinfopersoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeinfopersoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
