import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyjcComponent } from './syjc.component';

describe('SyjcComponent', () => {
  let component: SyjcComponent;
  let fixture: ComponentFixture<SyjcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyjcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
