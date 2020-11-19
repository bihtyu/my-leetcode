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
  const arr = s.split('')
  const point = {}
  let maxStrObj = {
    isPalindromeArr: false,
    arr: [],
    len: 0
  }
  const axisArr = []
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i++) {
    const item = arr[i]
    point[item] = point[item] || []
    if (point[item].length > 0) {
      point[item].forEach(pointItem => {
        axisArr.push([pointItem, i])
      })
    } else {
      axisArr.push([i, null])
    }
    point[item].push(i)
  }
  for (let i = 0; i < axisArr.length; i++) {
    const item = axisArr[i]
    if (maxStrObj.len === arr.length) {
      break
    }
    if ((item[0] + item[1] + 1) < maxStrObj.len) {
      continue
    }
    let currentArr = item.length === 1 ? arr[item] : arr.slice(item[0], item[1] + 1)
    const currentObj = isPalindrome(currentArr)
    if (currentObj.isPalindromeArr && (currentObj.len > maxStrObj.len)) {
      maxStrObj = currentObj
    }
  }
  console.log(maxStrObj.arr.join(''))
  return maxStrObj.arr.join('')
};

function isPalindrome(arr) {
  let isPalindromeArr = true
  const len = arr.length
  for(let i = 0; i < len / 2; i++) {
    if (isPalindromeArr) {
      if (arr[i] !== arr[len - i - 1]) {
        isPalindromeArr = false
        break
      }
    } else {
      break
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
// longestPalindrome('xaabacxcabaaxcabaax') // error
// longestPalindrome('ac')
// longestPalindrome('abcdefghioihgfedcba')
// longestPalindrome('aba')
// longestPalindrome('yfikrcvmuegdciuqahlsjesplljlswxaejgdzhubzqkiroxyhtjvazcwcnsvdzjiainmiyobyfclyugttaswlntwukkfbebcdaxdpaxwqenkxxphxdcgrnpruoaetvunwyskswvvmjmltncsdukwzlpfodhgxkjvzppwpvmqlfbojgbdiryleskemhjfoxxzjqihcykpgzhaugwwbqtddjzpmrgdncgzsttqenmbnnavfjkiennwxtguywoaiuungqpyfcffzmljfianapawiayywuvazrnxouvndzqbmmyntkkdyykgodjbeojtpnsyhfrltuazgznddaaibupephvgrcjpzvjttmhtnydwvrpgijselaukwrcosxpcbptebalkheymuyblffahvbszotmutmmqhlgoskuoejvavlprvgyozpylsnqhqrnqpabgbwzwxyibpmsauxcfnbtwwbosksuzqzmobijytxxtyjibomzqzusksobwwtbnfcxuasmpbiyxwzwbgbapqnrqhqnslypzoygvrplvavjeouksoglhqmmtumtozsbvhafflbyumyehklabetpbcpxsocrwkualesjigprvwdynthmttjvzpjcrgvhpepubiaaddnzgzautlrfhysnptjoebjdogkyydkktnymmbqzdnvuoxnrzavuwyyaiwapanaifjlmzffcfypqgnuuiaowyugtxwnneikjfvannbmneqttszgcndgrmpzjddtqbwwguahzgpkychiqjzxxofjhmekselyridbgjobflqmvpwppzvjkxghdofplzwkudscntlmjmvvwsksywnuvteaourpnrgcdxhpxxkneqwxapdxadcbebfkkuwtnlwsattguylcfyboyimniaijzdvsncwczavjthyxorikqzbuhzdgjeaxwsljllpsejslhaquicdgeumvcrkify')
// longestPalindrome('bbbbbbb')
// longestPalindrome('aaccdefcaa')
// longestPalindrome('aa')
longestPalindrome('racecar')