// import { arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions } from './const.js';
// import { getMockData } from './utils.js';

import { getDataInfo } from './getDataInfo.js';
import { insertAnchorImageTags } from './showMiniPhoto.js';
import { getAnchorImageInfoFn } from './getAnchorImageInfo.js';
import { insertBigFotoFn } from './showBigFoto.js';
import { scaleControlFn, effectControlFn } from './insertImageStyle.js';
import { imageUpload } from './imageUpload.js';
import { addFilter } from './addFilter.js';

import {
	url,
	imageInsertionTarget,
	pictureTemplate,
	constForGetAnchorImageInfoFn,
	constForGetAnchorImageInfo,
	uploadBtn,
	constToInsertBigFotoFn,
	enterScaleControl,
	enterEffectControl,
	enterImageUpload,

} from './const.js';

//get elements from showMockData
// const photoConfigs = getMockData(arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions);

//get elements from server
const photosConfigs = await getDataInfo(url.photos);
const commentsConfigs = await getDataInfo(url.comments);

console.log('photosConfigs[0].descriptions', await photosConfigs[0].descriptions);
console.log('commentsConfigs[0].name', await commentsConfigs[0].name);

// // insertAnchorImageTags
insertAnchorImageTags(await photosConfigs, imageInsertionTarget, pictureTemplate);

// // getAnchorImageInfo
getAnchorImageInfoFn(await photosConfigs, constForGetAnchorImageInfoFn, constForGetAnchorImageInfo);

// addBigImageClickUpload
uploadBtn.addEventListener('change', function () {
	insertBigFotoFn(constToInsertBigFotoFn)

	// // addStyleImageClickUpload
	// insertImageStyleFn(enterScaleControl, enterEffectControl, noUiSlider);
	scaleControlFn(enterScaleControl);
	effectControlFn(enterEffectControl);

	// add upload to 'photo'
	imageUpload(enterImageUpload);
})


addFilter(await photosConfigs);