import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lr6Component } from './lr6.component';

describe('Lr6Component', () => {
  let component: Lr6Component;
  let fixture: ComponentFixture<Lr6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lr6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lr6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
