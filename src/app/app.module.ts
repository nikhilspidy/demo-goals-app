import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatIconModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';
import { GoalService } from './services/goal.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GoalService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
