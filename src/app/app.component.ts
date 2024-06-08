import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmpComponent } from './add-emp/add-emp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';


  constructor(private diglog: MatDialog){}

  openAddEmp(){
    this.diglog.open(AddEmpComponent)
  }

}
