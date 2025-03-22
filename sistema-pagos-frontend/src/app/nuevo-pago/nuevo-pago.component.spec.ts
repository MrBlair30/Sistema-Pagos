import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPagoComponent } from './nuevo-pago.component';

describe('NuevoPagoComponent', () => {
  let component: NuevoPagoComponent;
  let fixture: ComponentFixture<NuevoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
