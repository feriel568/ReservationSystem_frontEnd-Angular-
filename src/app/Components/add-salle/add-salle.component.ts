import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { SalleService } from '../../Services/salle-service.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {
  salleForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  dayControls: FormControl[] = [];

  constructor(private formBuilder: FormBuilder, private salleService: SalleService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.dayControls = this.days.map(() => this.formBuilder.control(false));

    this.salleForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required],
      location: ['', Validators.required],
      description: [''],
      isAvailable: [false],
      days: new FormArray(this.dayControls),
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  getDayControl(index: number): FormControl {
    return this.dayControls[index];
  }

  onSubmit(): void {
    if (this.salleForm.invalid) {
      return;
    }

    // Filter the selected days
    const selectedDays = this.salleForm.value.days
      .map((checked: boolean, index: number) => checked ? this.days[index] : null)
      .filter((value: string | null) => value !== null);

    const formValue = { ...this.salleForm.value, days: selectedDays };

    const startTime = new Date(Date.parse(`1970-01-01T${formValue.startTime}:00`)).toTimeString().slice(0, 5); // Get only hours and minutes
    const endTime = new Date(Date.parse(`1970-01-01T${formValue.endTime}:00`)).toTimeString().slice(0, 5);

    formValue.startTime = startTime;
    formValue.endTime = endTime;

    this.salleService.createSalle(formValue)
      .subscribe({
        next: () => {
          // Success handling
          this.successMessage = 'Salle added successfully.';
          this.errorMessage = null;
          this.salleForm.reset();
          console.log(this.salleForm)
        },
        error: (error) => {
          // Error handling
          this.errorMessage = 'Failed to add salle. Please try again.';
          this.successMessage = null;
          console.error(error);
        }
      });
  }
}
