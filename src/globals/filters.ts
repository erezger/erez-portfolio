import Vue from 'vue';

Vue.filter('getYear', (timeStamp: string) => {
  if (timeStamp) {
    return timeStamp.substr(0, 4);
  }
  return timeStamp;
});

