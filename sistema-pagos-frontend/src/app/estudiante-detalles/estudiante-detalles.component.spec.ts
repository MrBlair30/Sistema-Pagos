import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteDetallesComponent } from './estudiante-detalles.component';

describe('EstudianteDetallesComponent', () => {
  let component: EstudianteDetallesComponent;
  let fixture: ComponentFixture<EstudianteDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudianteDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
