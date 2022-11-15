import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidatesOfficerComponent } from './view-candidates-officer.component';

describe('ViewCandidatesOfficerComponent', () => {
  let component: ViewCandidatesOfficerComponent;
  let fixture: ComponentFixture<ViewCandidatesOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCandidatesOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCandidatesOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
