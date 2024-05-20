import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSallesComponent } from './liste-salles.component';

describe('ListeSallesComponent', () => {
  let component: ListeSallesComponent;
  let fixture: ComponentFixture<ListeSallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSallesComponent]
    });
    fixture = TestBed.createComponent(ListeSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
