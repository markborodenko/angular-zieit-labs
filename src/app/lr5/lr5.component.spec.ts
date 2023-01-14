import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lr5Component } from './lr5.component';

describe('Lr5Component', () => {
  let component: Lr5Component;
  let fixture: ComponentFixture<Lr5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lr5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lr5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
