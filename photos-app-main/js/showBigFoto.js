export function showBigFoto() {

	const textDescription = document.querySelector('.text__description');
	textDescription.setAttribute('maxlength', 140);

	const imgUploadOverlay = document.querySelector('.img-upload__overlay');
	const bodyTag = document.querySelector('.body');
	imgUploadOverlay.classList.remove('hidden');
	bodyTag.classList.add('modal-open');

	const uploadCancel = document.querySelector('#upload-cancel');
	uploadCancel.addEventListener('click', (evt) => {
		if (evt.target.id === "upload-cancel") {
			imgUploadOverlay.classList.add('hidden');
			bodyTag.classList.remove('modal-open');
		}
	})

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			imgUploadOverlay.classList.add("hidden");
			bodyTag.classList.remove('modal-open');
		}
	});


	const arrMaxCount = 5;
	const elementLengthMax = 20;
	const message = {
		textEnterInfo: 'введіть данні',
		textHashtagMax: `не можна вказати більше п'яти хеш-тегів`,
		textLengthMax: `максимальна довжина одного хеш-тегу 20 символів, включаючи ґрати`,
		textNoDubleEl: `один і той же хеш-тег не може бути використаний двічі`,
		textNumAndStr: `рядок після ґрат має складатися з літер і чисел і не може містити прогалини`,
		textStartHeshtag: 'хеш-тег починається із символу # (грати)',
		textHeshtagDoble: 'хеш-тег може складатися тільки з одного ґрат'
	}

	function isElementNumAndStrFn(str) {
		return /^[A-Z0-9А-ЯІЇЁЄҐъыь'Єє#]+$/i.test(str)
	}

	function setCustomValidityInText(outputText) {
		textHashtags.setCustomValidity(outputText);
		textHashtags.reportValidity();
	}

	// const eng = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
	// const ukr = "АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщьЮюЯя'"
	// const rus = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщъыьЭэЮюЯя'
	// const deg = '0123456789'

	//text__hashtags
	const textHashtags = document.querySelector('.text__hashtags');

	textHashtags.addEventListener('input', (evt) => {
		const inputTextHashtags = evt.target.value;
		let arrTextHashtags = inputTextHashtags
			.split(' ') 											//split to space
			.map(el => el.toLowerCase()) 			//lower case
			.filter(el => el)   							// del str' ' - space

		// console.log(arrTextHashtags);
		isValidArrayOfHashtags(arrTextHashtags);

		function isElementHashFn(str) {//input str
			return /^[#]+$/i.test(str)//return (boolean)
		}

		function isValidArrayOfHashtags(arrayOfHashtags) {

			let isArrLengthZero = (arrayOfHashtags.length === 0); //blocker str without #(heshtag)

			let isStartToHashtag = null;
			let isHashtagDuble = null;
			arrayOfHashtags.forEach(element => {  //blocker str without #(heshtag)
				if (element[0] !== '#') {
					isStartToHashtag = true;
					const temp = element.slice(1);
					if (isElementHashFn(temp)) {
						isHashtagDuble = true;
					}
				}
			});

			let isArrayLengthFive = null;
			let isElementLengthTwenty = null;
			let isElementNumAndStr = null;
			let isElementUniqueCheck = null;
			const checkResult = arrayOfHashtags.some((el, _, arr) => {
				isArrayLengthFive = arr.length > arrMaxCount;
				isElementLengthTwenty = (el.length >= elementLengthMax);
				isElementNumAndStr = !isElementNumAndStrFn(el);
				isElementUniqueCheck = arr.some((value, index) => arr.indexOf(value) !== index);
			})

			switch (true) {
				case isArrLengthZero:
					setCustomValidityInText(message.textEnterInfo)
					break;
				case isArrayLengthFive:
					setCustomValidityInText(message.textHashtagMax)
					break;
				case isElementUniqueCheck:
					setCustomValidityInText(message.textNoDubleEl)
					break;
				case isElementLengthTwenty:
					setCustomValidityInText(message.textLengthMax)
					break;
				case isElementNumAndStr:
					setCustomValidityInText(message.textNumAndStr)
					break;
				case isStartToHashtag:
					setCustomValidityInText(message.textStartHeshtag)
					break;
				case isHashtagDuble:
					setCustomValidityInText(message.textHeshtagDoble)
					break;
				default:
					setCustomValidityInText('')
					break;
			}
		}
	})
}

