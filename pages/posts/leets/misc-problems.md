TODO: write up solutions.
Intention: document leets and job-search process.


```js
/*
  Given an array of prices...
*/
const maxProfit = (numbers) => {
  let max = 0;
  if (numbers.length == max) return max;
  for (n of numbers) {
      if (n > max) max = n;
  }
  return max;
};


const solution = (arr) => {
  if (!arr) return "";
  const sum = (arr, idx) => {
    if (idx - 1 < arr.length) {
      if (arr[idx - 1] === -1) return 0;
      return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
    }
    return 0;
  };
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return left == right ? "" : (left > right ? "Left" : "Right");
};


const maxProfit = function (prices) {
  let maxProfit = 0;
  let lowestPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    lowestPrice = Math.min(prices[i], lowestPrice);
    maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
  }
  return maxProfit;
};

console.log(solution([6, 0, -1, 10]));
console.log(solution([13, 10, 8, 4, 10]));
```

