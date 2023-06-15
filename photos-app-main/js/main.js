import { getImageTag } from './getImageTag.js';
const numElement = 26;
const countlikes = { min: 15, max: 200 };
const countComments = { min: 2, max: 8 };
let countIdStart = 22;
const decsPictArr = [
	'Володарь', 'Верхи на драконі', 'Зникнув', 'Підтримка', 'Darth Vader', 'NLAW & чоловік', 'Зірковий корабель', 'Косміний Скафандр', 'Darth Maul', 'Кораблекрушение',
	"Підтримка", 'Плащ', 'Авто', 'Великий двигун', 'Протигаз', 'NLAW & жінка', 'Військо', 'Потяг', 'Робот', 'Уламки заводу',
	'Мікроавтобус', 'Променевий меч', 'В лабораторії', 'Велика голова', 'Космодром'];
const messageArr = [
	'Все відмінно!',
	'Загалом все непогано. Але не всі.',
	'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
	'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
	'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
	'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];
const avatarArr = [
	'Арагорн', 'Родогаст', 'Родомир', 'Фродо', 'Елронд', 'Гендальф'
] //'Олена', 'Василій', 'Василіса', 'Петро', 'Андрій', 'Сергій', 

function getRamdomNum(rangeMin, rangeMax) {
	return Math.floor((Math.random() * (rangeMax - rangeMin) + rangeMin));
}

function incrementCountId() {
	countIdStart += 1;
	return countIdStart;
}

function getMessageArr() {
	return messageArr[getRamdomNum(0, messageArr.length - 1)];
}

function getCommentsArr() {
	const countRndComments = getRamdomNum(countComments.min, countComments.max);
	const tempCommentsArr = new Array(countRndComments).fill(null).map(() => {
		const curAvatarTemp = getRamdomNum(0, avatarArr.length);
		return {
			id: incrementCountId(),
			avatar: `./img/avatar-${curAvatarTemp}.svg`,
			name: avatarArr[curAvatarTemp],
			message: getMessageArr()
		}
	});
	return tempCommentsArr;
}

const photosArr = new Array(numElement).fill(null).map((_, i) => {
	return {
		id: incrementCountId(),
		url: `./photos/${i + 1}.jpg`,
		descriptions: decsPictArr[i],
		likes: getRamdomNum(countlikes.min, countlikes.max),
		comments: getCommentsArr()
	}
})

getImageTag(photosArr);
