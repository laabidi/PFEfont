import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinfopersoShowComponent } from './demandeinfoperso-show.component';

describe('DemandeinfopersoShowComponent', () => {
  let component: DemandeinfopersoShowComponent;
  let fixture: ComponentFixture<DemandeinfopersoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinfopersoShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeinfopersoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
