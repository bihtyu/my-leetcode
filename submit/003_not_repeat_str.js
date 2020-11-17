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
  const allArr = []
  for(let i = 0; i < originArr.length; i++) {
    const item = originArr[i]
    const currentIndex = strArr.findIndex(findItem => findItem === item)
    if (currentIndex < 0) {
      strArr.push(item)
      if (i === originArr.length - 1) {
        allArr.push(strArr)
      }
    } else {
      // abcabcbb
      const currentStart = i - strArr.length
      const newArr = originArr.slice(currentStart, originArr.length)
      const resetIndex = newArr.findIndex(findItem => findItem === item) + currentStart + 1
      i = resetIndex
      allArr.push(strArr)
      strArr = [originArr[i]]
    }
    if ((i === originArr.length - 1) && allArr.length === 0) {
      allArr.push(strArr)
    }
  }
  console.log(allArr)
  let maxLen = 0
  allArr.forEach(item => {
    if (item.length > maxLen) {
      maxLen = item.length
    }
  })
  return maxLen
};
// lengthOfLongestSubstring("bpfbhmipx")
console.log(lengthOfLongestSubstring("bpfbhmipx"))
// console.log(lengthOfLongestSubstring("dvdf"))

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("aab"))
// console.log(lengthOfLongestSubstring("bbbbbb"))
