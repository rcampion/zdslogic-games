import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdyNamNamComponent } from './birdy-nam-nam.component';

describe('BirdyNamNamComponent', () => {
  let component: BirdyNamNamComponent;
  let fixture: ComponentFixture<BirdyNamNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdyNamNamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdyNamNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
