import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerWelcomeComponent } from './officer-welcome.component';

describe('OfficerWelcomeComponent', () => {
  let component: OfficerWelcomeComponent;
  let fixture: ComponentFixture<OfficerWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
