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
  let total = 0
  for(let i = 0; i < sLen; i++) {
    numArr.push(sArr[i])
    if (numRows / (i + 1) === 0) {

    }
  }
  console.log(numArr)
}

convert('LEETCODEISHIRING', 3)

// 1: 1-0
// 2: 2-0
// 3: 3-1
// 4: 4-2
// 5: 5-3
// 6: 6-4
// 7: 7-5

// L       I
// E     E S     G
// E   D   H   N
// T O     I I
// C       R

// L         H
// E       S I
// E     I   R
// T   E     I
// C D       N
// O         G

// LEETCODEISHIRING
// L           R
// E         I
// E       H
// T     S
// C   I
// O E
// D

// 0 2 4 6 8 10 12 14 | 1 3 5 7 9 11 13 15 -- 2

// 0 4 8 12 | 1 3 5 7 9 11 13 15 | 2 6 10 14 -- 3

// 0 6 12 | 1 7 13 | 2 4 8 10 14 | 3 9 15 -- 4

// 0 8 | 1 7 9 15 | 2 6 10 14 | 3 7 11 15 | 4 12 -- 5

// 0 10 | 1 9 11 | 2 8 12 | 3 7 13 | 4 6 14 | 5 15 -- 6
