/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let max = 0
  let i = 0, j = height.length - 1
  while(i < j) {
    const current = Math.min(height[i], height[j]) * (j - i)
    max = Math.max(current, max)
    if (height[i] <= height[j]) {
      i++
    } else {
      j--
    }
  }
  return max
};

const a = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(a))