const joinArraysAndSort = (arr) => {
if (!Array.isArray(arr)) {
throw new Error('The argument passed should be an array');
}

if (arr.length === 0) {
throw new Error('The array passed should not be empty');
}

if (arr.some((subArr) => !Array.isArray(subArr))) {
throw new Error('The array passed should only contain arrays');
}

if (arr.some((subArr) => subArr.length === 0)) {
throw new Error('The array passed should not contain any empty sub-arrays');
}

  return arr.flat().sort();
};

module.exports = joinArraysAndSort;
// {
//   const joinArraysAndSort = (arr) => {
//     const sortedArr = [];

//     for (let subArr of arr) {
//       sortedArr.push(...subArr);
//     }

//     return sortedArr.sort();
//   };

//   joinArraysAndSort([
//     [10, 15, 30],
//     [12, 15, 20],
//     [17, 20, 32],
//   ]);
// }

// {
//   const joinArraysAndSort = (arr) => {
//     const sortedArr = [];

//     for (let subArr of arr) {
// 			for (let number of subArr) {
// 				sortedArr.push(number);
// 			}
//     }

//     return sortedArr.sort();
//   };

//   joinArraysAndSort([
//     [10, 15, 30],
//     [12, 15, 20],
//     [17, 20, 32],
//   ]);
// }
