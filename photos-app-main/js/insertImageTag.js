
export function insertAnchorImageTags(photoConfigs) {

  const imageInsertionTarget = document.querySelector('.pictures');
  
  const pictureTemplate = document.querySelector('#picture');

  const documentFragment = document.createDocumentFragment();

  for (const photoConfig of photoConfigs) {
		
    const pictureClone = pictureTemplate.content.cloneNode(true);

    const imageElement = pictureClone.querySelector('.picture__img');
    imageElement.src = `${photoConfig.url}`;
    imageElement.alt = `${photoConfig.descriptions}`;
		imageElement.dataset.id = `${photoConfig.id}`;
    const commentsCountField = pictureClone.querySelector('.picture__comments');
    commentsCountField.textContent = `${photoConfig.comments.length}`;

    const likesCountField = pictureClone.querySelector('.picture__likes');
    likesCountField.textContent = `${photoConfig.likes}`;

    documentFragment.appendChild(pictureClone);
  }

  imageInsertionTarget.appendChild(documentFragment);
}
