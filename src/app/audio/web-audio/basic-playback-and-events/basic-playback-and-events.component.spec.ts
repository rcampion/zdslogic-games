import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPlaybackAndEventsComponent } from './basic-playback-and-events.component';

describe('BasicPlaybackAndEventsComponent', () => {
  let component: BasicPlaybackAndEventsComponent;
  let fixture: ComponentFixture<BasicPlaybackAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPlaybackAndEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPlaybackAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
