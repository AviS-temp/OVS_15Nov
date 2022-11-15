import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterRegisterComponent } from './voter-register.component';

describe('VoterRegisterComponent', () => {
  let component: VoterRegisterComponent;
  let fixture: ComponentFixture<VoterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
