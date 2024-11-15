import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderinmueblesComponent } from './venderinmuebles.component';

describe('VenderinmueblesComponent', () => {
  let component: VenderinmueblesComponent;
  let fixture: ComponentFixture<VenderinmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderinmueblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderinmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
