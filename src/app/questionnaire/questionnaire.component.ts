import { Component } from '@angular/core';
import { Question } from './question';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormsModule, ReactiveFormsModule, FormControl, AbstractControl } from '@angular/forms';
import { Answer } from './answer';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import  { QUESTION_TYPES } from '../question-types'

@Component({
	selector: 'app-Questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.css']
})

export class QuestionnaireComponent {

	questions: Question[];
	activeQuestion: Question;
	activeQuestionIndex: 0;
	form: FormGroup;
	service: QuestionService;

	TEXT_INPUT_TYPES: string[] = [QUESTION_TYPES.text, QUESTION_TYPES.email, QUESTION_TYPES.number];

	CHOOSE_INPUT_TYPES: string[] = [QUESTION_TYPES.select, QUESTION_TYPES.checkbox, QUESTION_TYPES.radio];

	constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private router: Router) {
		this.activeQuestionIndex = 0;

		this.questions = questionService.getQuestions();

		this.setAtciveQuestion();
		this.createForm();
	}

	nextQuestion(questionId: number): void {
		let noOfQuestions = this.activeQuestionIndex + 1;
		let value = this.activeQuestion.value;
		let question: Question = this.activeQuestion;

		this.setAnswer();

		if (question.answers && question.answers[value] && question.answers[value].childQuestion) {
			this.setChildActive(question.answers[value].childQuestion);
		} else {
			if (Object.keys(this.questions).length > noOfQuestions) {
				this.activeQuestionIndex++;
				this.setAtciveQuestion();
			} else {
				this.questionService.saveQuestions(this.questions);
				this.router.navigate(['/results']);
			}
		}
	}

	prevQuestion(): void {
		if (this.activeQuestionIndex > 0) {
			this.activeQuestionIndex--;
			this.setAtciveQuestion();

		}
	}

	setAnswer(): void {
		let question: Question = this.activeQuestion;

		// It is set on cahnge already.
		if (question.type != QUESTION_TYPES.checkbox && question.type != QUESTION_TYPES.radio) {
			question.value = this.form.controls['question-' + this.activeQuestion.id].value;
		}
	}

	setAtciveQuestion(): void {
		this.activeQuestion = this.questions[this.activeQuestionIndex];
	}

	setChildActive(childQuestion: Question): void {
		childQuestion.isChild = this.activeQuestion.id;
		this.removeOldChilds(this.activeQuestion.id);
		this.questions.splice(this.activeQuestionIndex + 1, 0, childQuestion);
		this.activeQuestionIndex++;
		this.setAtciveQuestion();
		this.createForm();

	}

	removeOldChilds(activeQuestionId: number): void {
		let questions: Question[] = this.questions;
		this.questions.forEach(question => {
			if (question.isChild && question.isChild == activeQuestionId) {
				questions.splice(questions.indexOf(question), 1);
			}
		});
		this.questions = questions;
	}

	createForm(): void {
		var formData = {};

		this.questions.forEach(question => {

			if (this.TEXT_INPUT_TYPES.concat(this.CHOOSE_INPUT_TYPES).indexOf(question.type) == -1) {
				console.error(question.type + 'is not supported type. The type is defaulted to text');
				question.type = 'text';
			}

			var validators = this.getValidators(question);
			formData['question-' + question.id] = new FormControl('', validators);

			if (question.value) {
				formData['question-' + question.id].setValue(question.value);
			}

			if (question.answers) {
				formData['answers'] = this.createFormAnswers(question.answers);
			}
		});


		this.form = new FormGroup(formData);

	}

	createFormAnswers(answers: Answer[]): FormGroup {
		let formAnswer = {};
		answers.forEach(answer => {
			formAnswer['answer-' + answer.id] = new FormControl({});
		});

		return new FormGroup(formAnswer);
	}

	getValidators(question: Question): ValidatorFn[] {
		let validators = [];

		if (question.mandatory) {
			validators.push(Validators.required);
		}

		if (question.type == 'email') {
			validators.push(Validators.email);
		}

		if (question.type == 'number') {
			validators.push(this.numberValidator);

			// othervise FormControl returns value as '' if it is not a number and it always will show mandatory error instead of number format.
			question.type = 'text';
		}

		if (question.minLength) {
			validators.push(Validators.minLength(question.minLength));
		}

		if (question.maxLength) {
			validators.push(Validators.maxLength(question.maxLength));
		}

		return validators;
	}

	isTypeText(type: string): boolean {
		return this.TEXT_INPUT_TYPES.indexOf(type) != -1;
	}

	numberValidator(input: FormControl): Object {
		if (isNaN(parseInt(input.value))) {
			return { number: true };
		}
		return null;
	}

}
