/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let minSteps = -1
  deadendArr = deadends
  if (deadends.includes(target)) { 
    return minSteps
  }
  const targetArr = target.split('')
  let normalSteps = 0 // ignore deadends
  let stepArr = []
  let start = [0, 0, 0, 0]
  targetArr.map((item, index) => {
    const currentNum = Number(item)
    if (currentNum !== 0) {
      if (currentNum <= 5) {
        normalSteps += currentNum
        for (let i = 1; i <= currentNum; i++) {
          start[index] = i
          const currentStr = start.join('')
          stepArr.push(currentStr)
        }
      } else {
        normalSteps += 10 - currentNum
        for (let i = 9; i >= currentNum; i--) {
          start[index] = i
          const currentStr = start.join('')
          stepArr.push(currentStr)
        }
      }
    }
  })
};

// ["0201","0200","0102","1212","2002"]
// "0202"
// expected answer: 6
// 0100 0200 0201 0202
// 0100 0110 0210 0211 0212 0202

openLock(["0201","0101","0102","1212","2002"], '0202')