export const url = {
	photos: 'http://localhost:4001/photos',
	comments: 'http://localhost:4001/comments'
}

export const arrayLengthPictures = 25;
export const rangeOfLikes = { min: 15, max: 200 };
export const rangeOfComments = { min: 0, max: 20 };
export const descriptions = [
	'Володарь', 'Верхи на драконі', 'Зникнув', 'Підтримка', 'Darth Vader', 'NLAW & чоловік', 'Зірковий корабель', 'Косміний Скафандр', 'Darth Maul', 'Кораблекрушение',
	"Підтримка", 'Плащ', 'Авто', 'Великий двигун', 'Протигаз', 'NLAW & жінка', 'Військо', 'Потяг', 'Робот', 'Уламки заводу',
	'Мікроавтобус', 'Променевий меч', 'В лабораторії', 'Велика голова', 'Космодром', 'Космодром'];

export const messages = [
	'Все відмінно!',
	'Загалом все непогано. Але не всі.',
	'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
	'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
	'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
	'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];

export const avatars = [
	'Арагорн', 'Родогаст', 'Родомир', 'Фродо', 'Елронд', 'Гендальф'
]

//const to InsertImageTag
export const imageInsertionTarget = document.querySelector('.pictures');
export const pictureTemplate = document.querySelector('#picture');

const bodyTag = document.querySelector('.body');
const zonePictures = document.querySelector('.pictures')
const zonePictureCancel = document.querySelector('.big-picture__cancel')
const bigPicture = document.querySelector('.big-picture');
const bigPictureImgTag = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureSocialComentCount = bigPicture.querySelector('.social__comment-count');
const commentsShown = bigPictureSocial.querySelector('.comments-shown');
const commentsCount = bigPictureSocial.querySelector('.comments-count');
const buttonSocialCommentsLoader = document.querySelector('.social__comments-loader');
const bigPictureSocialComments = bigPicture.querySelector('.social__comments');

export const constForGetAnchorImageInfoFn = [
	bodyTag,
	zonePictures,
	zonePictureCancel,
	bigPicture
]

export const constForGetAnchorImageInfo = [
	bigPictureImgTag,
	bigPictureLikes,
	bigPictureSocialComentCount,
	commentsShown,
	commentsCount,
	buttonSocialCommentsLoader,
	bigPictureSocialComments
]

export const uploadBtn = document.querySelector('#upload-file');

//heshtag
const textDescription = document.querySelector('.text__description');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const arrHashtagMaxLength = 5;
const hashtagLengthMax = 20;
const messagesValidText = {
	textEnterInfo: 'введіть данні',
	textHashtagMax: `не можна вказати більше п'яти хеш-тегів`,
	textLengthMax: `максимальна довжина одного хеш-тегу 20 символів, включаючи ґрати`,
	textNoDubleEl: `один і той же хеш-тег не може бути використаний двічі`,
	textNumAndStr: `рядок після ґрат має складатися з літер і чисел і не може містити прогалини`,
	textStartHeshtag: 'хеш-тег починається із символу # (грати)',
	textHeshtagDoble: 'хеш-тег може складатися тільки з одного ґрат'
}
const textHashtags = document.querySelector('.text__hashtags');


const tagScaleControlPreview = document.querySelector('.img-upload__preview').querySelector('img');
const tagScaleControlValue = document.querySelector('.scale__control--value');
const slider = document.querySelector('#slider');

export const constToInsertBigFotoFn = [
	textDescription,
	imgUploadOverlay,
	bodyTag,
	uploadCancel,
	arrHashtagMaxLength,
	hashtagLengthMax,
	messagesValidText,
	textHashtags,
	tagScaleControlValue,
	tagScaleControlPreview,
	slider
]

const tagScaleContainer = document.querySelector('.img-upload__scale');
const tagScaleControlSmaller = document.querySelector('.scale__control--smaller');
const tagScaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleRangeValue = {
	max: 100,
	min: 25,
	step: 25
}
export const enterScaleControl = [
	tagScaleContainer,
	tagScaleControlSmaller,
	tagScaleControlBigger,
	tagScaleControlValue,
	tagScaleControlPreview,
	scaleRangeValue
]




const effectFilter = {
	'effect-none': { min: "", max: "", step: "", classAdd: 'none', filter: 'none', countFilter: 'none' },
	'effect-chrome': { min: 0, max: 1, step: 0.1, classAdd: 'effects__preview--chrome', filter: 'grayscale', countFilter: '' },
	'effect-sepia': { min: 0, max: 1, step: 0.1, classAdd: 'effects__preview--sepia', filter: 'sepia', countFilter: '' },
	'effect-marvin': { min: 0, max: 100, step: 1, classAdd: 'effects__preview--marvin', filter: 'invert', countFilter: '%' },
	'effect-phobos': { min: 0, max: 3, step: 0.1, classAdd: 'effects__preview--phobos', filter: 'blur', countFilter: 'px' },
	'effect-heat': { min: 1, max: 3, step: 0.1, classAdd: 'effects__preview--heat', filter: 'brightness', countFilter: '' }
}

export const enterEffectControl = [
	effectFilter,
	tagScaleControlPreview,
	slider,
	tagScaleControlValue,
]