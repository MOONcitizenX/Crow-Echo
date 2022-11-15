import { BaseElement } from '../../../BaseElement';
import { QuizLevels } from './QuizLevels';
import './Quiz.scss';
import { NextLvlBtn } from './NextLvlBtn';
import { QuizQuestionCard } from './QuestionCard/QuizQuestionCard';
import { QuizSelect } from './QuestionCard/QuizOptions/QuizSelect';
import { BirdInfoCard } from './QuestionCard/BirdInfoCard/BirdInfoCard';

export class Quiz extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'div',
			className: 'quiz'
		});
		this.lang = langState;
		this.bottomContainer = new BaseElement({
			tag: 'div',
			className: 'quiz__container-bottom'
		});
		this.quizState = quizState;
	}
	render() {
		const levels = new QuizLevels(this.lang, this.quizState);
		levels.render();
		const quizCard = new QuizQuestionCard(this.lang, this.quizState);
		quizCard.render();
		const select = new QuizSelect(this.lang, this.quizState);
		select.render();
		const birdCard = new BirdInfoCard(this.lang, this.quizState, 'quiz-card', true);
		birdCard.render();
		this.bottomContainer.addChildren(select, birdCard);
		const nextBtn = new NextLvlBtn(this.lang, this.quizState);
		nextBtn.render();
		this.addChildren(levels, quizCard, this.bottomContainer.elem, nextBtn);
	}
}
