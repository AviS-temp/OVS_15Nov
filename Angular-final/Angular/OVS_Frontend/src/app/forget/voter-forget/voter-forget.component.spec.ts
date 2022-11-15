import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterForgetComponent } from './voter-forget.component';

describe('VoterForgetComponent', () => {
  let component: VoterForgetComponent;
  let fixture: ComponentFixture<VoterForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterForgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
