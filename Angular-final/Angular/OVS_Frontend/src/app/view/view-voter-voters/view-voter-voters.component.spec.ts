import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVoterVotersComponent } from './view-voter-voters.component';

describe('ViewVoterVotersComponent', () => {
  let component: ViewVoterVotersComponent;
  let fixture: ComponentFixture<ViewVoterVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVoterVotersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVoterVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
