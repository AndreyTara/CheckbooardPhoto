import { insertAnchorImageTags } from './showMiniPhoto.js';
import { enterAddFilter } from './const.js';

const [
	imageInsertionTarget,
	pictureTemplate,
	imgFiltersForm,
	imgFilters,
	filterDiscussedBtn,
	filterDefaultBtn,
	filterRandomBtn,
	limitRamdomArrLenght,
	timeToDebounsing
] = enterAddFilter;


export function addFilter(arr) {

	imgFilters.classList.remove('img-filters--inactive');
	imgFiltersForm.addEventListener("mousemove", debounce((e) => {
		eventFun(e, arr);
	}, timeToDebounsing))
}

function eventFun(e, arr) {
	let currentArr;
	if (e.target.id === "filter-default") {
		filterDefaultBtn.classList.add("img-filters__button--active");
		filterDiscussedBtn.classList.remove("img-filters__button--active");
		filterRandomBtn.classList.remove("img-filters__button--active");
		currentArr = showPopularPictures(arr, "id")
	} else if (e.target.id === "filter-random") {
		filterRandomBtn.classList.add("img-filters__button--active");
		filterDiscussedBtn.classList.remove("img-filters__button--active");
		filterDefaultBtn.classList.remove("img-filters__button--active");
		let tempArr = showRandomPictures(arr);
		currentArr = limitArray(tempArr, limitRamdomArrLenght);
	} else if (e.target.id === "filter-discussed") {
		filterDiscussedBtn.classList.add("img-filters__button--active");
		filterDefaultBtn.classList.remove("img-filters__button--active");
		filterRandomBtn.classList.remove("img-filters__button--active");
		currentArr = showPopularPictures(arr, "likes")
	}
	clearPictures();
	insertAnchorImageTags(currentArr, imageInsertionTarget, pictureTemplate);
}


function clearPictures() {
	const elements = imageInsertionTarget.querySelectorAll("a");
	const elementsArray = Array.from(elements);
	elementsArray.forEach(function (element) {
		element.parentNode.removeChild(element);
	});
}

function showRandomPictures(arr) {
	const randomArr = shuffle(arr);
	return randomArr;
}

function showPopularPictures(arr, field) {
	const sortArr = sortByFieldArr(arr, field);
	return sortArr
}

function sortByFieldArr(arr, field) {
	arr.sort(byField(field));
	return arr
}

function byField(field) {
	return (a, b) => a[field] > b[field] ? 1 : -1;
}

function shuffle(array) {
	let currentIndex = array.length, randomIndex;
	while (currentIndex != 0) {
		// Pick
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		//swap
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}
	return array;
}

function limitArray(arr, limitlength) {
	let limitArr = [];
	for (let i = 0; i < limitlength; i++) {
		limitArr[i] = arr[i];
	}
	return limitArr
}

function debounce(func, wait, immediate) {
	let timeout;
	return function executedFunction() {
		const context = this;
		const args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
