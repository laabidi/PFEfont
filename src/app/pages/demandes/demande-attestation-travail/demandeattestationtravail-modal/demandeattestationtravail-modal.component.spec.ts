import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeattestationtravailModalComponent } from './demandeattestationtravail-modal.component';

describe('DemandeattestationtravailModalComponent', () => {
  let component: DemandeattestationtravailModalComponent;
  let fixture: ComponentFixture<DemandeattestationtravailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeattestationtravailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeattestationtravailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
