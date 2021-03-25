let sortArray =  [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]; 
let uniqueSorted = sortArray.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
uniqueSorted.sort();
console.log(uniqueSorted);