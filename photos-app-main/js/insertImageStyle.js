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
				efffectLabelValue.value = values[handle]
				tagScaleControlPreview.style.filter = tempFilter;
			});
		}
	}
}


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