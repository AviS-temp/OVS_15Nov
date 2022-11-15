import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoginComponent } from './officer-login.component';

describe('OfficerLoginComponent', () => {
  let component: OfficerLoginComponent;
  let fixture: ComponentFixture<OfficerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
