import { Component, Input } from '@angular/core';
import { Question } from '../questionnaire/question';
import { FormGroup } from '@angular/forms';
import { QuestionCommon } from './question-common';

@Component({
	selector: 'question-text',
	templateUrl: './questiontext.component.html'
})
export class QuestionTextComponent extends QuestionCommon<Question> {

	@Input()
	question: Question;

	@Input()
	form: FormGroup;

	constructor(question: Question) {
		super(question);
	}

}
