// import { arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions } from './const.js';
// import { getMockData } from './utils.js';

import { getDataInfo } from './getDataInfo.js';
import { insertAnchorImageTags } from './insertImageTag.js';
import { getAnchorImageInfoFn } from './getAnchorImageInfo.js';
import { insertBigFotoFn } from './insertBigFoto.js';
import { scaleControlFn, effectControlFn } from './insertImageStyle.js';
// import noUiSlider from '../node_modules/nouislider/dist/nouislider.mjs';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

import {
	url,
	imageInsertionTarget,
	pictureTemplate,
	constForGetAnchorImageInfoFn,
	constForGetAnchorImageInfo,
	uploadBtn,
	constToInsertBigFotoFn,
	enterScaleControl,
	enterEffectControl
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
})


// // addStyleImageClickUpload
// insertImageStyleFn(enterScaleControl, enterEffectControl, noUiSlider);
scaleControlFn(enterScaleControl);
effectControlFn(enterEffectControl);
