import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordsComponent } from './records/records.component';
import { UserComponent } from './user/user.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from  '@angular/material/core';
import{RecorddataService} from './recorddata.service';
@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,MatNativeDateModule
  ],
  providers: [RecorddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
