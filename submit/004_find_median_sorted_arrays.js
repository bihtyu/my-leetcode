/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newArr = nums1.concat(nums2).sort((a, b) => Number(a) - Number(b))
  const len = newArr.length
  let middle = 0
  if (len % 2 === 0) {
    middle = (newArr[len / 2] + newArr[len / 2 - 1]) / 2
  } else {
    middle = newArr[parseInt(len / 2)]
  }
  return middle
};
