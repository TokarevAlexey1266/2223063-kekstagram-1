import { imageUpload } from './uploadFile.js';

const Scale ={
  SCALING_STEP: 0.25,
  MAX_SCALING: 1,
  MIN_SCALING: 0.25,
  START_SCALING: 1,
};

let scaling = Scale.START_SCALING;

const buttons = document.querySelector('.img-upload__scale');
const form = document.querySelector('.img-upload__form');
const scaleValue = document.querySelector('.scale__control--value');

const reValue = () => {
  scaling = scaleValue.value.replace('%', '') / 100;

  if(scaling <= Scale.MAX_SCALING && scaling >= Scale.MIN_SCALING) {
    imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  }
};

const doScaling = (evt) => {
  const targetImage = evt.target;
  imageUpload.style.transform = `scale(${scaling})`;

  let mode = 0;

   if (targetImage.classList.contains('scale__control--smaller')) {
    mode = -1;
  }
  if (targetImage.classList.contains('scale__control--bigger')) {
    mode = 1;
  }

  scaling = scaling + Scale.SCALING_STEP * mode;
  if(scaling > Scale.MAX_SCALING) {
    scaling = Scale.MAX_SCALING;
  }
  if(scaling < Scale.MIN_SCALING) {
    scaling = Scale.MIN_SCALING;
  }

  imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  scaleValue.value = `${scaling.toFixed(2) * 100  }%`;
};

const scalingPhotos = () => {
  buttons.addEventListener('click', doScaling);
  scaleValue.addEventListener('change', reValue);
  scaleValue.value = `${START_SCALING * 100  }%`;
  imageUpload.style.transform = `scale(${Scale.START_SCALING})`;
};
const restart = () => {
  buttons.removeEventListener('click', doScaling);
  scaling = Scale.START_SCALING;
};


export { scalingPhotos, restart };
