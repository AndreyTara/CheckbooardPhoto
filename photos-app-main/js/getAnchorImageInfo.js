export function getAnchorImageInfoFn(photoConfigs, constForGetAnchorImageInfoFn, constForGetAnchorImageInfo) {
	const [
		bodyTag,
		zonePictures,
		zonePictureCancel,
		bigPicture
	] = constForGetAnchorImageInfoFn;

	zonePictures.addEventListener('click', (evt) => {
		if (!evt.target.classList.contains("picture__img")) return
		bigPicture.classList.remove("hidden");
		bodyTag.classList.add('modal-open');
		const clickFotoId = +evt.target.dataset.id
		const clickPhot = photoConfigs.find((el) => el.id === clickFotoId);
		getAnchorImageInfo(clickPhot, constForGetAnchorImageInfo);
	})

	zonePictureCancel.addEventListener('click', (evt) => {
		const clickCancel = evt.target
		if (clickCancel) {
			bigPicture.classList.add("hidden");
			bodyTag.classList.remove('modal-open');
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			bigPicture.classList.add("hidden");
			bodyTag.classList.remove('modal-open');
		}
	});

	function getAnchorImageInfo(clickPhoto, constForGetAnchorImageInfo) {
		const [
			bigPictureImgTag,
			bigPictureLikes,
			bigPictureSocialComentCount,
			commentsShown,
			commentsCount,
			buttonSocialCommentsLoader,
			bigPictureSocialComments
		] = constForGetAnchorImageInfo;
	
		bigPictureImgTag.src = clickPhoto.url;
		bigPictureImgTag.alt = clickPhoto.descriptions;
		bigPictureLikes.textContent = clickPhoto.likes;
		const allCommentsCount = clickPhoto.comments.length;
		bigPictureSocialComments.innerHTML = '';
		const clickPhotoComents = clickPhoto.comments;
		buttonSocialCommentsLoader.style.display = 'block';
	
		if (allCommentsCount === 0) {								// //emptty comments
			bigPictureSocialComentCount.innerHTML = '';
			buttonSocialCommentsLoader.innerHTML = '';
			return
		}
		let currentCountElements = 0; 							// // start comment count
		if (allCommentsCount < 5) {
			currentCountElements = allCommentsCount;
			buttonSocialCommentsLoader.style.display = 'none';
		} else {
			currentCountElements = 5;
		}
		getCountComments(currentCountElements, allCommentsCount);
		getAnchorElementTag(currentCountElements, clickPhotoComents)
	
		buttonSocialCommentsLoader.addEventListener('click', (evt) => {
			buttonSocialCommentsLoader.style.display = 'block';
			currentCountElements += 5;
			if (currentCountElements >= allCommentsCount) {
				currentCountElements = allCommentsCount;
				buttonSocialCommentsLoader.style.display = 'none';
			}
			getCountComments(currentCountElements, allCommentsCount);
			getAnchorElementTag(currentCountElements, clickPhotoComents);
		})
	
		function getCountComments(currentCount, allCount) {
			commentsShown.textContent = currentCount;
			commentsCount.textContent = allCount;
		}
	
		function getAnchorElementTag(currentElements, clickArr) {
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
}

