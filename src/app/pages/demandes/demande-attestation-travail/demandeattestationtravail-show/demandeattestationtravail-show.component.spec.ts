import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeattestationtravailShowComponent } from './demandeattestationtravail-show.component';

describe('DemandeattestationtravailShowComponent', () => {
  let component: DemandeattestationtravailShowComponent;
  let fixture: ComponentFixture<DemandeattestationtravailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeattestationtravailShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeattestationtravailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
