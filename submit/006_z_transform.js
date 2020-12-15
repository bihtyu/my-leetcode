// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const sArr = s.split('')
  const sLen = sArr.length
  const numArr = []
  for(let i = 0; i < numRows; i++) {
    numArr[i] = []
  }
  let rows = 0
  let isRise = true
  for (let i = 0; i < sLen; i++) {
    if (rows < numRows && isRise) {
      numArr[rows].push(sArr[i])
      rows++
    } else {
      if (isRise) {
        rows = numRows <= 2 ? 0 : (numRows - 2)
      }
      numArr[rows].push(sArr[i])
      if (numRows === 1) {
        rows = 0
      } else if (numRows === 2) {
        rows = 1
      } else {
        isRise = false
        rows--
        if (rows === 0) {
          isRise = true
        }
      }
    }
  }
  // 0 1 2 1 0 1 2 1 0
  let zStr = ''
  numArr.forEach(subArr => {
    console.log(subArr)
    zStr += subArr.join('')
  })
  return zStr
}

// console.log(convert('PAYPALISHIRING', 3))
// console.log(convert('ABCDEFGH', 1))
// console.log(convert('ABCDEFGH', 2))
console.log(convert('LEETCODEISHIRING', 3))
// console.log(convert('LEETCODEISHIRING', 4))
