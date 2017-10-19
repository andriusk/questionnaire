import { Question } from '../questionnaire/question';

export class QuestionCommon<T> {
	question: Question;
	ERROR_MESSAGES;

	constructor(question: Question) {
		this.question = question;

		this.ERROR_MESSAGES = {
			required: 'This question is mandatory to answer. Please fill it.',
			email: 'Email format is not valid. Example: you@yourdomain.com',
			default: 'Question is not correctly answered. Please double check it.',
			number: 'The value you entered is not numeric. Please enter number in to field above.',
			minlength: 'The answer you provided should have more characters.',
			maxlength: 'The answer you provided is too long'
		};
	}

	getErrorMessages(errors) {
		// Get first error
		let errorType = Object.keys(errors)[0];

		return this.ERROR_MESSAGES[errorType] || this.ERROR_MESSAGES.default;
	}

	isInvalid(controls) {
		return !controls.valid && !controls.pristine && controls.errors;
	}
}