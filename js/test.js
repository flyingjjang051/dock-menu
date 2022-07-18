// const tempSet = new Set();
// tempSet.add("aaa");
// spread  ...
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr02 = [10, ...arr, 100]; // 얕은 복사
arr02.push(100);
console.log(arr);
const set = new Set(arr);
const newArray = [];
set.forEach(function (item) {
  //console.log(item);
  newArray.push(item);
});
console.log(newArray);
const str = "abcderg";
const spreadArr = [...arr];
const spreadArr02 = Array.from(set);
console.log(...arr);
console.log(...str);
console.log(spreadArr);
console.log(spreadArr02);
