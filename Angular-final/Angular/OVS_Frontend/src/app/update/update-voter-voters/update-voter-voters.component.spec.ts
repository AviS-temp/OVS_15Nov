import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoterVotersComponent } from './update-voter-voters.component';

describe('UpdateVoterVotersComponent', () => {
  let component: UpdateVoterVotersComponent;
  let fixture: ComponentFixture<UpdateVoterVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVoterVotersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVoterVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
