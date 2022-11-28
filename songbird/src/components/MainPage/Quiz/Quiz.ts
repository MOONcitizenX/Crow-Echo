import { BaseElement } from '../../../BaseElement';
import { LanguageState } from '../../../states/LanguageState';
import { QuizLevels } from './QuizLevels';
import './Quiz.scss';
import { NextLvlBtn } from './NextLvlBtn';
import { QuizQuestionCard } from './QuestionCard/QuizQuestionCard';
import { QuizState } from '../../../states/QuizState';
import { QuizSelect } from './QuestionCard/QuizOptions/QuizSelect';
import { BirdInfoCard } from './QuestionCard/BirdInfoCard/BirdInfoCard';

export class Quiz extends BaseElement {
	private lang;
	private quizState;
	private bottomContainer;
	constructor(langState: LanguageState, quizState: QuizState) {
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
		const birdCard = new BirdInfoCard(
			this.lang,
			'quiz-card',
			this.quizState,
			true
		);
		birdCard.render();
		this.bottomContainer.addChildren(select, birdCard);
		const nextBtn = new NextLvlBtn(this.lang, this.quizState);
		nextBtn.render();
		this.addChildren(levels, quizCard, this.bottomContainer.elem, nextBtn);
	}
}
