import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerRegisterComponent } from './officer-register.component';

describe('OfficerRegisterComponent', () => {
  let component: OfficerRegisterComponent;
  let fixture: ComponentFixture<OfficerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
