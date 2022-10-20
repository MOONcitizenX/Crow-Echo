import { state } from './utils/constants.js';
import { createElem } from './utils/createElements.js';
import { getLocalStorageItems } from './utils/localStorage.js';

export const darkBGscore = createElem({
	tag: 'div',
	classN: 'darkBG'
});

export const modalScore = createElem({
	tag: 'div',
	classN: 'modal-window',
	parent: darkBGscore
});

export const showTopScore = () => {
	if (getLocalStorageItems('topScoreList')) {
		const data = getLocalStorageItems('topScoreList');
		const topScoreHeader = createElem({
			tag: 'h2',
			classN: 'modal__grats modal__grats--score',
			txtContent: `Top ${data.length} winners`,
			parent: modalScore
		});
		const topScoreMessage = createElem({
			tag: 'p',
			classN: 'modal__message',
			txtContent: `Sorted by speed: moves / time`,
			parent: modalScore
		});
		const topScoreList = createElem({
			tag: 'ol',
			classN: 'modal__list',
			parent: modalScore
		});

		for (let item of data) {
			const listItem = createElem({
				tag: 'li',
				classN: 'modal__list-item',
				parent: topScoreList
			});
			createElem({
				tag: 'h4',
				classN: 'winner__name',
				txtContent: `<${item.name}>: `,
				parent: listItem
			});
			createElem({
				tag: 'p',
				classN: 'winner__info',
				txtContent: item.info,
				parent: listItem
			});
		}
	} else {
		const noScoreMessage = createElem({
			tag: 'h2',
			classN: 'modal__grats',
			txtContent: 'No winners yet!',
			parent: modalScore
		});
	}
};

darkBGscore.addEventListener('click', ({ target }) => {
	if (!target.closest('.modal-window')) {
		darkBGscore.classList.remove('darkBG--active');
		modalScore.classList.remove('modal-window--active');
		document.body.classList.remove('body-overflow');
		modalScore.innerHTML = '';
	}
});
