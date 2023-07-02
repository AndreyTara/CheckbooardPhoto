export function insertBigFotoFn(constToinsertBigFotoFn) {
	const [
		textDescription,
		imgUploadOverlay,
		bodyTag,
		uploadCancel,
		arrHashtagMaxLength,
		hashtagLengthMax,
		messagesValidText,
		textHashtags
	] = constToinsertBigFotoFn

	textDescription.setAttribute('maxlength', 140);

	imgUploadOverlay.classList.remove('hidden');
	bodyTag.classList.add('modal-open');

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
	textHashtags.addEventListener('input', (evt) => {
		const inputTextHashtags = evt.target.value;
		let arrTextHashtags = inputTextHashtags
			.split(' ') 											//split to space
			.map(el => el.toLowerCase()) 			//lower case
			.filter(el => el)   							// del str' ' - space

		// console.log(arrTextHashtags);
		isValidArrayOfHashtags(arrTextHashtags);

		function isElementHashFn(str) {//input str
			return /^[A-Z0-9А-ЯІЇЁЄҐъыь'Єє]+$/i.test(str)//return (boolean)
		}

		function isValidArrayOfHashtags(arrayOfHashtags) {
			let isArrLengthZero = (arrayOfHashtags.length === 0); //blocker str without #(heshtag)
			let isStartToHashtag = null;
			let isHashtagDuble = null;
			arrayOfHashtags.forEach(element => {  //blocker str without #(heshtag)
				if (element[0] !== '#') {
					isStartToHashtag = true;
				} else {
					const temp = element.slice(1);
					if (!isElementHashFn(temp)) {
						console.log(isElementHashFn(temp));
						isHashtagDuble = true;
					}
				}
			});

			let isArrayLengthFive = null;
			let isElementLengthTwenty = null;
			let isElementNumAndStr = null;
			let isElementUniqueCheck = null;
			arrayOfHashtags.some((el, _, arr) => {
				isArrayLengthFive = arr.length > arrHashtagMaxLength;
				isElementLengthTwenty = (el.length >= hashtagLengthMax);
				isElementNumAndStr = !isElementNumAndStrFn(el);
				isElementUniqueCheck = arr.some((value, index) => arr.indexOf(value) !== index);
			})

			switch (true) {
				case isArrLengthZero:
					setCustomValidityInText(messagesValidText.textEnterInfo)
					break;
				case isArrayLengthFive:
					setCustomValidityInText(messagesValidText.textHashtagMax)
					break;
				case isElementUniqueCheck:
					setCustomValidityInText(messagesValidText.textNoDubleEl)
					break;
				case isElementLengthTwenty:
					setCustomValidityInText(messagesValidText.textLengthMax)
					break;
				case isElementNumAndStr:
					setCustomValidityInText(messagesValidText.textNumAndStr)
					break;
				case isStartToHashtag:
					setCustomValidityInText(messagesValidText.textStartHeshtag)
					break;
				case isHashtagDuble:
					setCustomValidityInText(messagesValidText.textHeshtagDoble)
					break;
				default:
					setCustomValidityInText('')
					break;
			}
		}
	})
}

