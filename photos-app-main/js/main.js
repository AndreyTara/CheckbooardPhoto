const numElement = 25;
const decsPictArr = [
	'Lord', 'Riding a dragon', 'disappeared', 'Life Support', 'Darth Vader', 'NLAW&man', 'Starship', 'Space suit', 'Darth Maul', 'Crash',
	"God's touch", 'Raincoat', 'Car', 'Crash engine', 'Space suit', 'NLAW&woman', 'UA army', 'Space train', 'Robot', 'Factory wreckage',
	'Minibus', 'beam sword', 'In laboratory', 'Big head', 'spaceport']
const messageArr = [
	'Все відмінно!',
	'Загалом все непогано. Але не всі.',
	'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
	'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
	'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
	'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
]

const arrPhoto = new Array(numElement).fill(null).map((_, i) => {
	return {
		id: Number(i + 1),
		url: `photos/${i + 1}.jpg`,
		descriptions: decsPictArr[i],
		likes: ramdonNum(15, 200),
		comments: messageArr[ramdonNum(0, messageArr.length - 1)]
	}
})

function ramdonNum(rangeMin, rangeMax) {
	return (Math.random() * (rangeMax - rangeMin) + rangeMin).toFixed(0);
}
