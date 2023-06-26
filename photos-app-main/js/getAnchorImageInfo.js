export function getAnchorImageInfo(clickPhoto) {


	function getCountComments(currentCount, allCount) {
		if (allCount > currentCount) {
			commentsShown.textContent = allCount;
		}
		commentsShown.textContent = currentCount;
		commentsCount.textContent = allCount;
	}
	const bigPicture = document.querySelector('.big-picture');

	const bigPictureImgTag = bigPicture.querySelector('img');
	bigPictureImgTag.src = clickPhoto.url;
	bigPictureImgTag.alt = clickPhoto.descriptions;

	const bigPictureLikes = bigPicture.querySelector('.likes-count');
	bigPictureLikes.textContent = clickPhoto.likes;

	const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
	const commentsShown = bigPictureSocial.querySelector('.comments-shown');
	const commentsCount = bigPictureSocial.querySelector('.comments-count');
	const allCommentsCount = clickPhoto.comments.length;

	const bigPictureSocialComments = bigPicture.querySelector('.social__comments');
	bigPictureSocialComments.innerHTML = '';
	const clickPhotoComents = clickPhoto.comments;
	let currentCountElements = 1;
	if (allCommentsCount < 5) {
		currentCountElements = allCommentsCount;
	} else {
		currentCountElements = 5;
	}
	getCountComments(currentCountElements, allCommentsCount);
	getActhorElementTag(currentCountElements, clickPhotoComents)

	const buttonSocialCommentsLoader = document.querySelector('.social__comments-loader');
	buttonSocialCommentsLoader.addEventListener('click', (evt) => {
		currentCountElements += 5;
		if (currentCountElements > allCommentsCount) {
			currentCountElements = allCommentsCount;
		}
		getCountComments(currentCountElements, allCommentsCount);
		getActhorElementTag(currentCountElements, clickPhotoComents);
	})

	function getActhorElementTag(currentElements, clickArr) {
		bigPictureSocialComments.innerHTML = "";
		for (let el = 0; el < currentElements; el++) {
			bigPictureSocialComments.innerHTML +=
				`<li class="social__comment">
								<img class="social__picture" src="${clickArr[el].avatar}" alt="${clickArr[el].name}" width="35" height="35">
								<div>
									<p class="social__author">${clickArr[el].name}</p>
									<p class="social__text">${clickArr[el].message}</p>
								</div>
							</li>`
		}
	}
}
