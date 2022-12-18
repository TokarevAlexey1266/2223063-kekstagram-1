import { getRandomNumber } from './util.js';

const PHOTO_COUNT = 25;

const NAMES = [
  'Алексей',
  'Виктор',
  'Василиса',
  'Василий',
  'Валентин',
  'Анна',
  'Алена'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Пойдет и ладно.',
  'Нормально',
  'Чудесно все'
];

const allPhotoInfo = [];

function createPhotoDescriptions () {
  
  for (let i = 0; i < PHOTO_COUNT; i++) {
    allPhotoInfo[i] = {
      id: i + 1,
      url: `photos/${i}.jpg`,
      description: `Описание ${index + 1}`,
      likes: getRandomNumber(15, 200),
      comments: createComments(getRandomNumber(1,17))
    };
  }
  return allPhotoInfo;
}

function createComments() {
  
  const comments = [];
  for (let i = 0; i < PHOTO_COUNT; i++){
    comments[i] = {
      id: i + 1,
      avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,
      message: MESSAGE[getRandomNumber(0, MESSAGES.length - 1))],
      name: NAMES[getRandomNumber(0, NAMES.length - 1))],
    };
  }

  return comments;
}

createPhotoDescriptions();
export {NAMES, MESSAGE, createPhotoDescriptions, createComments, allPhotoInfo};
