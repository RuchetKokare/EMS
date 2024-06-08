import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatDialogModule} from '@angular/material/dialog';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { provideNativeDateAdapter } from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule,
    MatSelectModule,ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule
  ],
  
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
