import { BaseElement } from '../../../BaseElement';
import { QuizLevels } from './QuizLevels';
import './Quiz.scss';
import { NextLvlBtn } from './NextLvlBtn';
import { QuizQuestionCard } from './QuestionCard/QuizQuestionCard';
import { QuizState } from '../../../states/QuizState';
import { QuizSelect } from './QuestionCard/QuizOptions/QuizSelect';
import { getLS } from '../../../services/LocalStorageHandlers';
import { getRandomNum } from '../../../services/Randomizer';

export class Quiz extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz'
		});
		this.lang = langState;
		this.bottomContainer = new BaseElement({
			tag: 'div',
			className: 'quiz__container-bottom'
		});
		this.quizState = new QuizState({
			quizLvl: getLS('quiz_state')?.quizLvl || 0,
			quizCorrectAnswer: getLS('quiz_state')?.quizCorrect || getRandomNum(0, 6),
			isAnswered: getLS('quiz_state')?.isAnswered || false,
			scoreTotal: getLS('quiz_state')?.scoreTotal || 0,
			scoreLvl: getLS('quiz_state')?.scoreLvl || 5,
			clickedCard: getLS('quiz_state')?.clickedCard || -1,
			dropStyles: getLS('quiz_state')?.dropStyles || false
		});
	}
	render() {
		const levels = new QuizLevels(this.lang, this.quizState);
		levels.render();
		const quizCard = new QuizQuestionCard(this.lang, this.quizState);
		quizCard.render();
		const select = new QuizSelect(this.lang, this.quizState);
		select.render();
		this.bottomContainer.addChildren(select);
		const nextBtn = new NextLvlBtn(this.lang, this.quizState);
		nextBtn.render();
		this.addChildren(levels, quizCard, this.bottomContainer.elem, nextBtn);
	}
}
