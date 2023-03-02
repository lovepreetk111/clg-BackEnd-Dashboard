import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdCommComponent } from './phd-comm.component';

describe('PhdCommComponent', () => {
  let component: PhdCommComponent;
  let fixture: ComponentFixture<PhdCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdCommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhdCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
