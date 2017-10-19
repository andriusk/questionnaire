import { Component, Input } from '@angular/core';
import { Question } from '../questionnaire/question';
import { QuestionCommon } from './question-common';
import { FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'question-select',
	templateUrl: './question-select.component.html'
})

export class QuestionSelectComponent extends QuestionCommon<Question> {

	@Input()
	question: Question;

	@Input()
	form: FormGroup;

	constructor(question: Question) {
		super(question);
	}
}