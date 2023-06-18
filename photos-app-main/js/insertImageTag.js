/**
 * Inserts anchor image tags based on the provided photo configurations.
 * @param {Array<Object>} photoConfigs - An array of photo configurations.
 */
export function insertAnchorImageTags(photoConfigs) {

  /** @type {Element} */
  const imageInsertionTarget = document.querySelector('.pictures');
  
  /** @type {HTMLTemplateElement} */
  const pictureTemplate = document.querySelector('#picture');

  /** @type {DocumentFragment} */
  const documentFragment = document.createDocumentFragment();

  for (const photoConfig of photoConfigs) {
		
    /** @type {DocumentFragment} */
    const pictureClone = pictureTemplate.content.cloneNode(true);

    /** @type {HTMLImageElement} */
    const imageElement = pictureClone.querySelector('.picture__img');
    imageElement.src = `${photoConfig.url}`;
    imageElement.alt = `${photoConfig.descriptions}`;
		imageElement.dataset.id = `${photoConfig.id}`;
    /** @type {HTMLElement} */
    const commentsCountField = pictureClone.querySelector('.picture__comments');
    commentsCountField.textContent = `${photoConfig.comments.length}`;

    /** @type {HTMLElement} */
    const likesCountField = pictureClone.querySelector('.picture__likes');
    likesCountField.textContent = `${photoConfig.likes}`;

    documentFragment.appendChild(pictureClone);
  }

  imageInsertionTarget.appendChild(documentFragment);
}
