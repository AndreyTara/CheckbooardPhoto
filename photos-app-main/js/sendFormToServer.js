export function sendFormToServer() {
	// const form = document.querySelector('#upload-select-image');
	const sendBtn = document.querySelector('#upload-submit');

	form.addEventListener('submit', (e) => {
		// e.preventDefault()
		const formData = new FormData(form);
		// const imageFile = document.querySelector('#imageInput');
		const file  = document.querySelector('.img-upload__preview').querySelector('img');
		formData.append('image', file);
		const options = {
			method: "POST",
			body: formData
		};
		fetch('/gpam', options)
			.then((response) => {
				if (response.ok) {
					console.log('Данные успешно отправлены.')
				} else {
					console.error('Ошибка отправки данных..')
				}
			})
			.catch(error => {
				console.error('Ошибка отправки данных..')
			});
	})
}