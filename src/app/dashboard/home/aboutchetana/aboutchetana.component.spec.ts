import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutchetanaComponent } from './aboutchetana.component';

describe('AboutchetanaComponent', () => {
  let component: AboutchetanaComponent;
  let fixture: ComponentFixture<AboutchetanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutchetanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutchetanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
