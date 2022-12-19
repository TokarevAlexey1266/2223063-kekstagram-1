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

const MESSAGES = [
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
      comments: getComments(getRandomNumber(1, 17))
    };
  }
  return allPhotoInfo;
}

function getComments() {
  const commentsData = [];

  for (let index = 0; index < PHOTO_COUNT; index++) {
    commentsData[index] = {
      id: index + 1,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
      name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    };
  }

  return commentsData;
}

createPhotoDescriptions();

export { allPhotoInfo ,NAMES, MESSAGES, DESCRIPTIONS, createPhotoDescriptions, getComments };
