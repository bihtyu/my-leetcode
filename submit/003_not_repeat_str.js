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

var lengthOfLongestSubstring = function(s) {
  if (s === '') return 0
  if (s.trim() === '' || s.length === 1) return 1
  const originArr = s.split('')
  let strArr = []
  let maxLen = 0
  for(let i = 0; i < originArr.length; i++) {
    const item = originArr[i]
    const currentIndex = strArr.findIndex(findItem => findItem === item)
    if (currentIndex < 0) {
      strArr.push(item)
      if (i === originArr.length - 1) {
        maxLen = strArr.length > maxLen ? strArr.length : maxLen
      }
    } else {
      const currentStart = i - strArr.length
      const newArr = originArr.slice(currentStart, originArr.length)
      const resetIndex = newArr.findIndex(findItem => findItem === item) + currentStart + 1
      i = resetIndex
      maxLen = strArr.length > maxLen ? strArr.length : maxLen
      strArr = [originArr[i]]
    }
    if (i === originArr.length - 1) {
      maxLen = strArr.length > maxLen ? strArr.length : maxLen
    }
  }
  return maxLen
};
// lengthOfLongestSubstring("bpfbhmipx")
console.log(lengthOfLongestSubstring("bpfbhmipx"))
// console.log(lengthOfLongestSubstring("dvdf"))

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("aab"))
// console.log(lengthOfLongestSubstring("bbbbbb"))
