const ALERT_SHOW_TIME = 5000;

function getRandomNumber(first, second){
  first = Math.ceil(first);
  second = Math.floor(second);
  if (first < second) {
    return Math.floor(Math.random() * (second - first + 1)) + first;
  }
  return 'неверные данные';
}
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const isEscape = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.classList.add('error_message');
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();

  }, ALERT_SHOW_TIME);
};

const mixArray = (array) => {
  for (let one = array.length - 1; one > 0; one--) {
    const two = getRandomNumber(0, one);
    [array[one], array[two]] = [array[two], array[one]];
  }
  return array;
};

const debounce = (callback, timeoutDelay = 500) => {

  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {

  let lastTime = 0;

  return (...rest) => {

    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export { getRandomNumber, checkStringLength, isEscape, showAlert, mixArray, debounce, throttle };
