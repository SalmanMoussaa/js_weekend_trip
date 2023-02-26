window.onload=function(){
var input = [];
for (var i = 0; i < 10; i++) {
  input.push(Number(prompt(`Enter number ${i+1}:`)));
}

// Define the Merge Sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  var i = 0;
  var j = 0;
  var result = [];
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Calling the Merge Sort function on the input array
var sorted = mergeSort(input);

// Loging the sorted array on the console
console.log(sorted);



}