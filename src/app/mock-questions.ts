import { Question } from './questionnaire/question';

/***** id must be unique!!! ****/
export const QUESTIONS: Question[] = [
	{
		id: 0,
		title: 'Your name',
		type: 'text',
		text: 'What is your name?',
		mandatory: true,
		minLength: 5,
		maxLength: 40
	}, {
		id: 1,
		title: 'Your age',
		type: 'number',
		text: 'How old are You? Please enter your age.',
		mandatory: true,
		maxLength: 2
	}, {
		id: 2,
		title: 'Your gender',
		type: 'radio',
		text: 'What is Your gender?',
		mandatory: true,
		answers: [
			{
				id: 0,
				text: 'Female',
				value: '1',
				childQuestion: {
					id: 5,
					title: 'Your maiden name',
					type: 'text',
					text: 'What is Your maiden name?',
					mandatory: true,
					minLength: 5,
					maxLength: 40
				}
			}, {
				id: 1,
				text: 'Male',
				value: '2',
				childQuestion: {
					id: 6,
					title: 'Your mother`s maiden name',
					type: 'text',
					text: 'What is Your mother`s maiden name?',
					mandatory: true,
					minLength: 5,
					maxLength: 40
				}
			}
		]
	}, {
		id: 3,
		title: 'Nationality',
		type: 'select',
		text: 'Please select Your nationality',
		mandatory: true,
		answers: [
			{
				id: 0,
				text: 'Please select',
				value: ''
			}, {
				id: 1,
				text: 'Lithuanian',
				value: '1'
			}, {
				id: 2,
				text: 'Latvian',
				value: '2'
			}, {
				id: 3,
				text: 'Other',
				value: '3'
			}

		]
	}, {
		id: 4,
		title: 'Transport',
		type: 'checkbox',
		text: 'Which transport you prefer to travel to work?',
		mandatory: false,
		answers: [
			{
				id: 0,
				text: 'Car',
				value: '1'
			}, {
				id: 1,
				text: 'Bus',
				value: '2'
			}, {
				id: 2,
				text: 'Bike',
				value: '3'
			}, {
				id: 3,
				text: 'By foot',
				value: '4'
			}
		]
	}
];