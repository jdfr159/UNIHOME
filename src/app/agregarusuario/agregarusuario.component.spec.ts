import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarusuarioComponent } from './agregarusuario.component';

describe('AgregarusuarioComponent', () => {
  let component: AgregarusuarioComponent;
  let fixture: ComponentFixture<AgregarusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarusuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
