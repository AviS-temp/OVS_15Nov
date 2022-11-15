import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerForgetComponent } from './officer-forget.component';

describe('OfficerForgetComponent', () => {
  let component: OfficerForgetComponent;
  let fixture: ComponentFixture<OfficerForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerForgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
