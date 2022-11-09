import { BaseElement } from '../../../BaseElement';
import { QuizLevels } from './QuizLevels';
import './Quiz.scss';
import { QuizQuestionCard } from './QuizQuestionCard';

export class Quiz extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz'
		});
		this.lang = langState;
	}
	render() {
		const levels = new QuizLevels(this.lang);
		levels.render();
		const quizCard = new QuizQuestionCard(this.lang);
		quizCard.render();
		this.addChildren(levels, quizCard);
	}
}