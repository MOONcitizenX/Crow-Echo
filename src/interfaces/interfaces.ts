export interface BaseElementOptions {
	tag?: keyof HTMLElementTagNameMap;
	className?: string;
	textContent?: string;
	attr?: any;
}

export interface BirdsDataOptions {
	id: number;
	name: string;
	name_en: string;
	species: string;
	description: string;
	description_en: string;
	image: string;
	audio: string;
}
export interface PlayerStateOptions {
	volume: number;
	isMuted: boolean;
	timeCurrent: number;
	timeWidth: number;
	isPaused: boolean;
	src: string;
}

export interface QuizStateOptions {
	quizLvl: number;
	quizCorrectAnswer: number;
	isAnswered: boolean;
	scoreTotal: number;
	scoreLvl: number;
	clickedCard: number;
	dropStyles: boolean;
	success: boolean;
}

export type RoutesObj = Record<string, () => void>;
