import './uploadFile.js';
import './rendering.js';
import './bigPicture.js';
import './hashtag.js';
import './photoScaling.js';
import './photoEffects.js';
import './server.js';
import './filterPhotos.js';
import './uploadPhoto.js';

import { renderPhotos } from './rendering.js';
import { sendRequest } from './server.js';
import { showAlert } from './util.js';
import { getPhotos } from './filterPhotos.js';

const onSuccess = (data) => {
  renderPhotos(data);
  getPhotos(data);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = (error) =>{
  showAlert(error);
};

const method = 'GET';

sendRequest(onSuccess, onFail, method);
