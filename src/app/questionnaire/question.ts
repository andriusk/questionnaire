import { Answer } from './answer';

export class Question {
  id: number;
  title: string;
  type: string;
  text: string;
  minLength?: number;
  maxLength?: number;
  mandatory?: boolean;
  answers?: Array<Answer>;
  value?: any;
  isChild?: number;
}