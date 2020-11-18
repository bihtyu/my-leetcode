/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return a
  const arr = s.split('')
  if (Array.from(new Set(arr)).length === 1) return s
  let strArr = []
  const allArr = []
  let start = 0
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const isNewOne = item !== strArr[0]
    strArr.push(item)
    if (isNewOne) {
      if (strArr.length === 1) {
        start = i
      }
    } else {
      allArr.push(strArr)
      i = start
      strArr = []
    }
    if ((i === arr.length - 1) && (allArr.length === 0)) {
      i = start
      strArr = []
    }
    if ((start === arr.length - 1) && (allArr.length === 0)) {
      allArr.push([arr[0]])
    }
  }
  let maxStrObj = {
    isPalindromeArr: false,
    arr: [],
    len: 0
  }
  console.log(allArr)
  allArr.forEach(item => {
    const currentObj = isPalindrome(item)
    if (currentObj.isPalindromeArr && currentObj.len > maxStrObj.len) {
      maxStrObj = currentObj
    }
  })
  console.log(maxStrObj.arr.join(''))
  return maxStrObj.arr.join('')
};

function isPalindrome(arr) {
  let isPalindromeArr = true
  const len = arr.length
  if (len === 2) {
    if (arr[0] !== arr[1]) {
      isPalindromeArr = false
    }
  } else {
    for(let i = 0; i < len / 2; i++) {
      if (isPalindromeArr && (arr[i] !== arr[len - i - 1])) {
        isPalindromeArr = false
      }
    }
  }
  return {
    isPalindromeArr,
    arr,
    len
  }
}

// @lc code=end

// longestPalindrome('ccc')
longestPalindrome('xaabacxcabaaxcabaax') // error 
// longestPalindrome('ac')
// longestPalindrome('abcdefghioihgfedcba')
// longestPalindrome('aba')