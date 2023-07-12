import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookingadminComponent } from './allbookingadmin.component';

describe('AllbookingadminComponent', () => {
  let component: AllbookingadminComponent;
  let fixture: ComponentFixture<AllbookingadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbookingadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllbookingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
