import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeattestationtravailComponent } from './demandeattestationtravail.component';

describe('DemandeattestationtravailComponent', () => {
  let component: DemandeattestationtravailComponent;
  let fixture: ComponentFixture<DemandeattestationtravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeattestationtravailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeattestationtravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
