import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlistateurDesactiveComponent } from './utlistateur-desactive.component';

describe('UtlistateurDesactiveComponent', () => {
  let component: UtlistateurDesactiveComponent;
  let fixture: ComponentFixture<UtlistateurDesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtlistateurDesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtlistateurDesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
