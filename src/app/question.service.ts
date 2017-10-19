import { Injectable } from '@angular/core';
import { Question } from './questionnaire/question';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionService {

	questions: Question[];

	constructor() {
		this.questions = QUESTIONS;
	}

	getQuestions(): Question[] {
		return this.questions;
	}

	saveQuestions(questions: Question[]) {
		this.questions = questions;
	}
}