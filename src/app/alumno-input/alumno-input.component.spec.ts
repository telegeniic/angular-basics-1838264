import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInputComponent } from './alumno-input.component';

describe('AlumnoInputComponent', () => {
  let component: AlumnoInputComponent;
  let fixture: ComponentFixture<AlumnoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
