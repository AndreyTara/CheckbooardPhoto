export function getImageTag(arr) {
	const addPictures = document.querySelector('.pictures');						// Found  class where to add
	const picturesForm = document.querySelector('#picture');						// Found  class form 
	const fragment = document.createDocumentFragment();									// create a fragment for collection form
	arr.forEach((el) => {																								// iteration array to elements
		const tempPicture = picturesForm.content.cloneNode(true);					// create clone 'picturesForm'
		const img = tempPicture.querySelector('.picture__img');						// create value 'img' to class 'picture__img'
		const comments = tempPicture.querySelector('.picture__comments');	// create value 'comments' to class 'picture__comments'
		const likes = tempPicture.querySelector('.picture__likes');				// create value 'likes' to class 'picture__likes'
		img.src = `${el.url}`;
		img.alt = `${el.descriptions}`;
		comments.textContent = `${el.comments.length}`;
		likes.textContent = `${el.likes}`;
		fragment.appendChild(tempPicture);																// value 'fragment' append 'tempPicture'
	})
	addPictures.appendChild(fragment);																	//// value 'addPictures' append 'fragment'
}