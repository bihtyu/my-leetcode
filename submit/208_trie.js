/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.tree = []
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const tree = this.tree
  const wordArr = word.split('')
  let currentPar = ''
  const wordLen = wordArr.length
  wordArr.forEach((item, index) => {
    if (!tree[index + 1] || tree[index + 1].length === 0) {
      tree[index + 1] = []
    }
    if (tree[index + 1].length > 0 && tree[index + 1].find(findItem => findItem.val === item)) {
      if (index === wordLen - 1) {
        tree[index + 1].push({ val: item, par: currentPar, isEnd: true })
      }
      currentPar = item
    } else {
      currentPar = index === 0 ? '' : wordArr[index - 1]
      tree[index + 1].push({ val: item, par: currentPar, isEnd: index === wordLen - 1 })
    }
  })
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const isSerach = true
  return this.startsWith(word, isSerach)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix, isSearch = false) {
  const tree = this.tree
  const wordArr = prefix.split('')
  const wordLen = wordArr.length
  let isExist = true
  wordArr.forEach((item, index) => {
    if (isExist && tree[index + 1].findIndex(findItem => findItem.val === item) < 0) {
      isExist = false
    }
    if (isExist && index === wordLen - 1) {
      let currentItem = {}
      if (isSearch) {
        currentItem = tree[index + 1].find(findItem => findItem.val === item && findItem.isEnd)
      } else {
        currentItem = tree[index + 1].find(findItem => findItem.val === item)
      }
      isExist = Boolean(currentItem)
    }
  })
  return isExist
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert("apple");
console.log(trie.startsWith("app"))
console.log(trie.search("app"))
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");   
// trie.search("app");     // 返回 true
// @lc code=end

