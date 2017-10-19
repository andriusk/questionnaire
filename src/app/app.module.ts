import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';
import { QuestionTextComponent } from './questions/questiontext.component'
import { QuestionCheckboxComponent } from './questions/question-checkbox.component'
import { QuestionSelectComponent } from './questions/question-select.component'
import { Question } from './questionnaire/question'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from './question.service'


const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'results', component: ResultsComponent },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResultsComponent,
    QuestionnaireComponent,
    QuestionTextComponent,
    QuestionCheckboxComponent,
    QuestionSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [Question, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
