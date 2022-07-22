import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurShowComponent } from './utilisateur-show.component';

describe('UtilisateurShowComponent', () => {
  let component: UtilisateurShowComponent;
  let fixture: ComponentFixture<UtilisateurShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
