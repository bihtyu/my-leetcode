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
  let isAdd = true
  for (let i = 0; i < sLen; i++) {
    console.log(rows)
    if (rows < numRows && isAdd) {
      numArr[rows].push(sArr[i])
      if (rows < numRows - 1) {
        rows += 1
      } else {
        isAdd = false
        rows = numRows - 2
      }
    } else {
      isAdd = false
      numArr[rows].push(sArr[i])
      rows = rows - 1 < 0 ? 0 : rows - 1
      if (rows === 0) {
        rows = 1
        isAdd = true
      }
    }
  }
  let zStr = ''
  console.log(numArr)
  numArr.forEach(subArr => {
    zStr += subArr.join('')
  })
  return zStr
}

// console.log(convert('PAYPALISHIRING', 3))
// console.log(convert('ABCDEFGH', 2))
console.log(convert('ABCDEFGH', 3))

// A   E
// B D F H
// C   G