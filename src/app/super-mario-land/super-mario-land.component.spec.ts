import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarioLandComponent } from './super-mario-land.component';

describe('SuperMarioLandComponent', () => {
  let component: SuperMarioLandComponent;
  let fixture: ComponentFixture<SuperMarioLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperMarioLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMarioLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
