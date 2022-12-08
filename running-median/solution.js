'use strict';

function runningMedian(sequence) {
  const result = [sequence[0]];
  const runningSequence = [sequence[0]];

  for (let i = 1; i < sequence.length; i++) {
    runningSequence.push(sequence[i]);
    runningSequence.sort();
    if (runningSequence.length % 2 === 0) {
      const middleRightIndex = runningSequence.length / 2;
      result.push(
        (runningSequence[middleRightIndex] +
          runningSequence[middleRightIndex - 1]) /
          2
      );
    } else {
      const middleIndex = runningSequence.length / 2 - 0.5;
      result.push(runningSequence[middleIndex]);
    }
  }

  return result;
}

module.exports = { runningMedian };
