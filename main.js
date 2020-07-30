const _ = {};

_.each = (array, iteratee) => {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array);
  }

  // your code here
};

_.map = (array, iteratee) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(iteratee(array[i], i, array));
  }
  return newArray;
};

// _.map = (array, iteratee) => {
//   const newArray = []

//   each(array, (val, i, array) => {
//     newArray.push(iteratee(val, i, array))
//   })

//   return newArray
// }
_.filter = (array, predicate) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
  // your code here
};

_.find = (array, predicate) => {
  var value = undefined
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      value = array[i]
      break

    }
  }
  return value

  // your code here
};

_.random = (min = 0, max) => {
  var rando
  rando = Math.floor(Math.random() * Math.floor(Math.abs(min) + Math.abs(max)))
  return rando - Math.abs(min)

  // your code here
};

_.range = (start, stop, step) => {
  var list = []
  for(let i = start; i < stop; i++){
    if (step) {
      if (i % step == 0) {
        list.push(i)
      }
    } else {
      list.push(i)
    }
  }
  return list

  // your code here
};

export default _;
