import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../questionnaire/question';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html'
})
export class ResultsComponent {
	
	questions: Question[]; 

	constructor(private questionService: QuestionService) {
		this.questions = questionService.getQuestions();
	}

	getAnswer(question: Question): string {
		if (!question.value) {
			return 'Not Answered';
		}

		let answer: string;

		if (question.answers) {
			answer = this.getSelectedAnswers(question);
		} else {
			answer = question.value;
		}


		return answer;
	}

	getSelectedAnswers(question: Question): string {
		let answers: string = '';
		let value = question.value;

		let ansArray: string[] = typeof value != 'string' ? value : value.split(',');

		ansArray.forEach(answerId => {
			answers += question.answers[answerId].text;
			if (ansArray.indexOf(answerId) != ansArray.length - 1) {
				answers += ', ';
			}
		});

		return answers;
	}

}