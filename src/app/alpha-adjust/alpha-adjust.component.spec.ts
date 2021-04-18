import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaAdjustComponent } from './alpha-adjust.component';

describe('AlphaAdjustComponent', () => {
  let component: AlphaAdjustComponent;
  let fixture: ComponentFixture<AlphaAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaAdjustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
