import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecongeShowComponent } from './demandeconge-show.component';

describe('DemandecongeShowComponent', () => {
  let component: DemandecongeShowComponent;
  let fixture: ComponentFixture<DemandecongeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecongeShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecongeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
