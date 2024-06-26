import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../srviec/employee-service.service';
import { __values } from 'tslib';
import { error } from 'console';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css',
})
export class AddEmpComponent {
  empform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeeServiceService,
    private diglogref: DialogRef<AddEmpComponent>,
  ) {
    this.empform = fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      eduction: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  eduction: String[] = [
    'Matrix',
    'Diploma',
    'Intermediate',
    'GraDuate',
    'PostGraduate',
  ];

  onFormSubmit() {
    if (this.empform.valid) {
      this.employeService.addEmployee(this.empform.value).subscribe({
        next: (val: any) => {
          alert('added successfully ');
          this.diglogref.close();
        },
        error: (err: any) => {
          console.log('Something went wrong ....', err);
        },
      });
    }
  }
  resetForm() {
    this.empform.reset();
  }
}
