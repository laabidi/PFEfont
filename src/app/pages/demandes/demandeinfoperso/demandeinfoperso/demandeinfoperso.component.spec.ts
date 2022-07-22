import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinfopersoComponent } from './demandeinfoperso.component';

describe('DemandeinfopersoComponent', () => {
  let component: DemandeinfopersoComponent;
  let fixture: ComponentFixture<DemandeinfopersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinfopersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeinfopersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
