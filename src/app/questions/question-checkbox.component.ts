import { Component, Input } from '@angular/core';
import { Question } from '../questionnaire/question';
import { QuestionCommon } from './question-common';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import  { QUESTION_TYPES } from '../question-types'

@Component({
	selector: 'question-checkbox',
	templateUrl: './question-checkbox.component.html'
})

export class QuestionCheckboxComponent extends QuestionCommon<Question> {

	@Input()
	question: Question;

	@Input()
	form: FormGroup;

	constructor(question: Question) {
		super(question);
	}

	// Checkbox is unique input and there is no functionality in angular to check whether is at least one chechbox selected or not
	checboxChanged(questionId: string, answerId: string, isChecked: boolean): void {
		let controls: AbstractControl = this.form.controls['question-' + questionId];

		if (this.question.type == QUESTION_TYPES.radio) {
			this.question.value = [answerId];
		} else {
			if (!this.question.value) {
				this.question.value = [];
			}

			if (isChecked) {
				this.question.value.push(answerId);
			} else {
				var index = this.question.value.indexOf(answerId);
				this.question.value.splice(index, 1);
			}
		}
		
		if (this.question.mandatory) {
			if (this.question.value.length == 0) {
				controls.setErrors(Validators.required);
			} else {
				controls.setErrors(null);
			}
		}

	}

}
