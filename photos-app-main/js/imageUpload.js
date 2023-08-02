import { showMessage } from "./showMessage.js";
export function imageUpload(enterImageUpload) {

	const [
		uploadSelectImage,
		uploadFile,
		uploadPictureBlock,
		body,
		imgUploadInput,
		uploadSubmitBtn,
		uploadedImage
		// API_ENDPOINT
	] = enterImageUpload

	let uploadPhoto;


	function addImage(evt) {
		const file = evt.target.files[0];
		uploadPhoto = file;
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (e) {
			uploadedImage.src = e.target.result;
		}
	}

	uploadSelectImage.addEventListener('change', addImage);

	function hendleUpload(evt) {
		evt.preventDefault();
		if (uploadPhoto) {
			// Створюємо об'єкт FormData, щоб передати файл на сервер
			const formData = new FormData();
			formData.append('file', uploadPhoto);
			// Викликаємо функцію для відправки даних на сервер
			sendFileToServer(formData);
		} else {
			console.log('Виберіть файл для завантаження.');
		}
	}

	function sendFileToServer(formData) {
		// Метод fetch для відправки файлу на сервер.
		fetch('http://localhost:4001/uploads', {
			method: 'POST',
			body: formData
		})
			.then(response => {
				// Обробка статусу відповіді тут
				console.log('Статус відповіді:', response.status);
				if (response.status === 200) {
					showMessage('success');
				} else {
					showMessage('error');
				}
			})
			.catch(error => {
				showMessage('error');
				console.error('Помилка при відправленні файлу на сервер:', error);
			});
	}

	uploadSubmitBtn.addEventListener('click', hendleUpload);
}