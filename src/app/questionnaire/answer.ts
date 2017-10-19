import { Question } from './question';

export class Answer {
	id: number;
	text: string;
	value: string;
	childQuestion?: Question;
}