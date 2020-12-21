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
    tree[index + 1].push({ val: item, par: currentPar, isEnd: index === wordLen - 1 })
    currentPar = item
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
    if (isExist && tree[index + 1]) {
      const matchItem = tree[index + 1].find(findItem => findItem.val === item && (findItem.par === '' || findItem.par === wordArr[index - 1]))
      isExist = Boolean(matchItem)
    }
    if (isExist && index === wordLen - 1) {
      let currentItem = {}
      if (isSearch) {
        currentItem = tree[index + 1] && tree[index + 1].find(findItem => findItem.val === item && findItem.isEnd)
      } else {
        currentItem = tree[index + 1] && tree[index + 1].find(findItem => {
          return findItem.val === item && (findItem.par === '' || findItem.par === wordArr[index - 1])
        })
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

// trie.insert("apple");
// trie.insert("appladsflksdjfksd");
// trie.startsWith("appleds");

// trie.insert("app");
// trie.insert("apple");
// trie.insert("beer");
// trie.insert("add");
// trie.insert("jam");
// trie.insert("rental");
// trie.startsWith("rent");

// error
// [null,null,null,null,null,null,null,false,true,false,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true]

// right
// [null,null,null,null,null,null,null,false,true,false,false,false,false,false,true,true,false,true,true,false,false,false,true,true,true]

// @lc code=end

