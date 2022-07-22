import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecongeModalComponent } from './demandeconge-modal.component';

describe('DemandecongeModalComponent', () => {
  let component: DemandecongeModalComponent;
  let fixture: ComponentFixture<DemandecongeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecongeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecongeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
