import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationfichepaieComponent } from './consulationfichepaie.component';

describe('ConsulationfichepaieComponent', () => {
  let component: ConsulationfichepaieComponent;
  let fixture: ComponentFixture<ConsulationfichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulationfichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationfichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
