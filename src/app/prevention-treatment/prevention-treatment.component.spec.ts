import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionTreatmentComponent } from './prevention-treatment.component';

describe('PreventionTreatmentComponent', () => {
  let component: PreventionTreatmentComponent;
  let fixture: ComponentFixture<PreventionTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreventionTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventionTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
