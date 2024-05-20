import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSallesUserComponent } from './all-salles-user.component';

describe('AllSallesUserComponent', () => {
  let component: AllSallesUserComponent;
  let fixture: ComponentFixture<AllSallesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSallesUserComponent]
    });
    fixture = TestBed.createComponent(AllSallesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
