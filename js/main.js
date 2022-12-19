import './uploadFile.js';
import './rendering.js';
import './bigPictures.js';
import './hashtag.js';
import './photoScaling.js';
import './photoEffects.js';
import './server.js';
import './PhotoFilter.js';
import './uploadPhoto.js';

import { renderPhotos } from './rendering.js';
import { sendRequest } from './server.js';
import { showAlert } from './util.js';
import { getPhotos } from './PhotoFilter.js';

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
