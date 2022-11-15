import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeRegisterComponent } from './nominee-register.component';

describe('NomineeRegisterComponent', () => {
  let component: NomineeRegisterComponent;
  let fixture: ComponentFixture<NomineeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
