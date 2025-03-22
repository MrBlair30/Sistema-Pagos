import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPagosComponent } from './load-pagos.component';

describe('LoadPagosComponent', () => {
  let component: LoadPagosComponent;
  let fixture: ComponentFixture<LoadPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
