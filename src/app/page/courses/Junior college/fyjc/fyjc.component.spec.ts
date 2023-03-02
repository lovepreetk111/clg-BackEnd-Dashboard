import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyjcComponent } from './fyjc.component';

describe('FyjcComponent', () => {
  let component: FyjcComponent;
  let fixture: ComponentFixture<FyjcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FyjcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
