// manual test
// const stream = [6, 4, 3, 2, 1, 5];

const uniformProbability = (dataStream) => {
  let result;

  dataStream.forEach((item, index) => {
    if (index === 0) {
      result = 0;
    }

    if (index > 0) {
      result = Math.floor(Math.random() * (index + 1)); // 0 to index
    }
  });

  return dataStream[result];
};

// manual test for average:
// const box = [0, 0, 0, 0, 0, 0];

// for (let i = 0; i <= 10000; i++) {
//   box[uniformProbability(stream) - 1]++;
// }

module.exports = {uniformProbability}
