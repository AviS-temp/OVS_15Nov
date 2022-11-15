import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastevoteComponent } from './castevote.component';

describe('CastevoteComponent', () => {
  let component: CastevoteComponent;
  let fixture: ComponentFixture<CastevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastevoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
