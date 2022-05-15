const interpolationSearch = (array, key) => {

  // if array is empty.
  if (!array.length) {
    return -1;
  }

  let low = 0;
  let high = array.length - 1;
  while (low <= high && key >= array[low] && x <= array[high]) {

    // calculate position with
    let pos = low + Math.floor(((high - low) * (key - array[low])) / (array[high] - array[low]));

    // if all elements are same then we'll have divide by 0 or 0/0
    // which may cause NaN
    pos = Number.isNaN(pos) ? low : pos;

    if (array[pos] === key) {
      return pos;
    }

    if (array[pos] > key) {
      high = pos - 1;
    } else {
      low = pos + 1;
    }

  }

  // not found.
  return -1;
};
console.log(interpolationSearch([1,2,3,4,5]), 4))
