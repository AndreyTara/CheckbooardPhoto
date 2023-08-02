export function showMessage(message) {
	const createMessage = {
		error: 'error',
		success: 'success'
	}
	if (message === createMessage.error || message === createMessage.success) {
		const documentFragment = document.createDocumentFragment();
		const textMessageTemplate = document.querySelector(`#${message}`);
		const body = document.querySelector(".body");
		const uploadPictureBlock = document.querySelector(".img-upload__overlay");
		const imgUploadForm = document.querySelector(".img-upload__form");
		uploadPictureBlock.classList.add("hidden");
		body.classList.remove("modal-open");
		const cloneTextMessage = textMessageTemplate.content.cloneNode(true);
		documentFragment.appendChild(cloneTextMessage);
		body.appendChild(documentFragment);

		const sectionMesssage = document.querySelector(`.${message}`);

		sectionMesssage.addEventListener("click", closeWindow);
		function closeWindow(e) {
			if (e.key === 'Escape' || e.target.className !== `${message}` || e.target.className === `${message}__button`) {
				body.removeChild(sectionMesssage);
				imgUploadForm.reset();
				uploadPictureBlock.classList.add("hidden");
				body.classList.remove("modal-open");
			}
		}
	} else {
		console.log('Wrong meassage')
	}
}