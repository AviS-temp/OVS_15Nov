import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVotersComponent } from './view-voters.component';

describe('ViewVotersComponent', () => {
  let component: ViewVotersComponent;
  let fixture: ComponentFixture<ViewVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVotersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
