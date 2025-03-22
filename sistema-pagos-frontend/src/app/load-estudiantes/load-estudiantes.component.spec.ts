import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEstudiantesComponent } from './load-estudiantes.component';

describe('LoadEstudiantesComponent', () => {
  let component: LoadEstudiantesComponent;
  let fixture: ComponentFixture<LoadEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
