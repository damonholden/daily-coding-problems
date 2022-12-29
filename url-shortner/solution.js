'use strict';

const ALPHANUMERIC_CHARACTERS =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const urlMap = {};

function shorten(url) {
  if (Object.values(urlMap).includes(url)) {
    throw new Error('url already shortened');
  }

  let key = '';
  do {
    for (let i = 0; i <= 7; i++) {
      key +=
        ALPHANUMERIC_CHARACTERS[
          Math.floor(Math.random() * (ALPHANUMERIC_CHARACTERS.length - 1))
        ];
    }
  } while (Object.keys(urlMap).includes(key));

  urlMap[key] = url;

  return key;
}

shorten('google.com');
shorten('bing.com');
shorten('apple.com');
