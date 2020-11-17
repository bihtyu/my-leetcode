/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// const { list } = require("postcss");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return setNumToList(getNum(l1) + getNum(l2))
};

function getNum(list) {
  return list.split(' -> ').reverse().join('')
}

function setNumToList(num) {
  return num.split('').reverse().join(' -> ')
}

const l1 = '2 -> 4 -> 3'
const l2 = '5 -> 6 -> 4'
addTwoNumbers(l1, l2)

// @lc code=end

