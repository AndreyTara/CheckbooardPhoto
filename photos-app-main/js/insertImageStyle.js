function addScaleCurrent(tagScaleControlValue, tagScaleControlPreview, scale) {
	tagScaleControlValue.value = `${scale}%`;// restart scaleValue 
	tagScaleControlPreview.style.transform = `scale(${scale / 100})`// restart scale
}

export function scaleControlFn(enterScaleControl) {
	const [
		tegScaleContainer,
		tagScaleControlSmaller,
		tagScaleControlBigger,
		tagScaleControlValue,
		tagScaleControlPreview,
		scaleRangeValue
	] = enterScaleControl;

	addScaleCurrent(tagScaleControlValue, tagScaleControlPreview, 100);
	let scaleValue = +tagScaleControlValue.value.slice(0, -1);

	tegScaleContainer.addEventListener('click', (event) => {
		const eventScaleValue = event.target;
		if (eventScaleValue === tagScaleControlSmaller) {
			scaleValue = scaleValue - scaleRangeValue.step;
			if (scaleValue < scaleRangeValue.min) {
				scaleValue = scaleRangeValue.min;
			}
		} else if (eventScaleValue === tagScaleControlBigger) {
			scaleValue = scaleValue + scaleRangeValue.step;
			if (scaleValue > scaleRangeValue.max) {
				scaleValue = scaleRangeValue.max;
			}
		}
		addScaleCurrent(tagScaleControlValue, tagScaleControlPreview, scaleValue);
	})
}

export function effectControlFn(enterEffectControlfn) {
	const [
		effectFilter,
		tagScaleControlPreview,
		slider,
		tagScaleControlValue
	] = enterEffectControlfn

	const efffectLabelValue = document.querySelector('.effect-level__value');
	const efffectList = document.querySelector('.effects__list');


	efffectList.addEventListener('click', (event) => {
		addScaleCurrent(tagScaleControlValue, tagScaleControlPreview, 100);
		let asd = event.target.id;
		let result = '';
		for (let key in effectFilter) {
			if (asd === key) {
				result = effectFilter[key];
			}
		}
		if (result.classAdd === 'none') {
			createSlider('remove', result);
		} else {
			createSlider('add', result);
		}
	})

	function createSlider(action, result) {
		if (action === 'remove') {
			if (slider.noUiSlider) {
				slider.noUiSlider.destroy();
			}
			tagScaleControlPreview.removeAttribute("class");
			tagScaleControlPreview.classList = `${result.classAdd}`;
			tagScaleControlPreview.style.filter = `none`;
		} else if (action === 'add') {
			slider.classList.add(".effect-level");
			tagScaleControlPreview.classList = `${result.classAdd}`;
			if (!slider.noUiSlider) {
				noUiSlider.create(slider, {
					start: [result.max],
					range: { min: result.min, max: result.max },
					step: result.step,
					connect: "lower"
					// tooltips: true
				});
			} else {
				slider.noUiSlider.updateOptions({
					start: [result.max],
					range: { min: result.min, max: result.max },
					step: result.step,
				});
			}

			slider.noUiSlider.on('update', function (values, handle) {
				const tempFilter = `${result.filter}(${values[handle]}${result.countFilter})`
				tagScaleControlPreview.style.filter = tempFilter;
			});
		}
	}
}




// console.log('scaleControlPreview', scaleControlPreview);
			// slider.querySelector('.noUi-connects').style.background = 'aqua';
			// slider.classList.add('.effect-level');
			// scaleControlPreview.classList = result.classAdd;
			// if (!slider.noUiSlider) {
			// nouislider.create(slider, {
			// 	start: 100,
			// 	range: { min: 0, max: 100 },
			// 	step: 1,
			// 	format: {
			// 		to}
			// })
			// } else {
			// 	slider.noUiSlider.updateOptions({
			// 		start: 50,
			// 		range: { min: 0, max: 76 },
			// 		step: 2
			// 	})
			// }
// export function insertImageStyleFn(enterScaleControl, enterEffectControl) { ////, nouislider , noUiSlider
// 	scaleControlFn(enterScaleControl);
// 	// console.log(enterEffectControl)
// 	// effectControlFn(enterEffectControl);
// }

	// createSlider('add', result)
	// 		switch (asd) {
	// 			case 'effect-none':
	// 				console.log('none')
	// 				break;
	// 			case 'effect-chrome':
	// 				// scaleControlPreview.style.filter = `grayscale(${1})`;
	// 				scaleControlPreview.add('effects__preview--chrome');
	// 				console.log('chrome')
	// 				break;
	// 			case 'effect-sepia':
	// 				scaleControlPreview.add('effects__preview--sepia');
	// 				console.log('sepia')
	// 				break;
	// 			case 'effect-marvin':
	// 				scaleControlPreview.add('effects__preview--marvin');
	// 				console.log('marvin')
	// 				break;
	// 			case 'effect-phobos':
	// 				scaleControlPreview.add('effects__preview--phobos');
	// 				console.log('phobos')
	// 				break;
	// 			case 'effect-heat':
	// 				scaleControlPreview.add('effects__preview--heat');
	// 				console.log('heat')
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 			const sliderEfeect = document.querySelector('#slider');
	// 	// console.log(slider1);
	// 	// // // // const value = {
	// 		// // // // 	startValue: 100,
	// 		// // // // 	rangeMin: 0,
	// 	// // // // 	rangeMax: 100,
	// 	// // // // 	stepCount: 1
	// 	// // // // }
	// 	noUiSlider.create(sliderEfeect, {
	// 		start: 50,
	// 		connect: true,
	// 		step: 10,
	// 		tooltips: true,
	// 		range: {
	// 			'min': 0,
	// 			'max': 100
	// 		}
	// 	})