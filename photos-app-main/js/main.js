// import { arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions } from './const.js';
// import { getMockData } from './utils.js';

import { insertAnchorImageTags } from './insertImageTag.js';
import { getAnchorImageInfoFn } from './getAnchorImageInfo.js';
import { insertBigFotoFn } from './insertBigFoto.js';
import {
	url,
	imageInsertionTarget,
	pictureTemplate,
	constForGetAnchorImageInfoFn,
	constForGetAnchorImageInfo,
	uploadBtn,
	constToInsertBigFotoFn
} from './const.js';
import { getDataInfo } from './getDataInfo.js';

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
// const uploadBtn = document.querySelector('#upload-file')
uploadBtn.addEventListener('change', function () {
	insertBigFotoFn(constToInsertBigFotoFn)
})


