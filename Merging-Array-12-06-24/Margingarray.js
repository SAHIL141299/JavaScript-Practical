arr1 = [2, 4, 3, 5, 4, 6];
arr2 = [1, 2, 6, 5, 4, 6];

const mergingArray = (data1, data2) => { 
  const  newArr = data1.concat(data2);
  console.log(newArr);
  newArr.sort();
  console.log(newArr.sort());
  const Duplicate = newArr.filter((value, index) => newArr.indexOf(value) === index);
return Duplicate;
};
console.log(mergingArray(arr1, arr2));
