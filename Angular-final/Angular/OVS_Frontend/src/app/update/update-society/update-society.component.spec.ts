import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocietyComponent } from './update-society.component';

describe('UpdateSocietyComponent', () => {
  let component: UpdateSocietyComponent;
  let fixture: ComponentFixture<UpdateSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSocietyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
