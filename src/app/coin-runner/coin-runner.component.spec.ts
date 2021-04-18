import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRunnerComponent } from './coin-runner.component';

describe('CoinRunnerComponent', () => {
  let component: CoinRunnerComponent;
  let fixture: ComponentFixture<CoinRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
