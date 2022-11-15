import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterWelcomeComponent } from './voter-welcome.component';

describe('VoterWelcomeComponent', () => {
  let component: VoterWelcomeComponent;
  let fixture: ComponentFixture<VoterWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
