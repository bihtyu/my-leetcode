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
    const existIndex = tree[index + 1].findIndex(findItem => findItem.val === item && findItem.par === currentPar)
    if (existIndex >= 0) {
      if (index === wordLen - 1) {
        tree[index + 1][existIndex].isEnd = true
      }
    } else {
      tree[index + 1].push({ val: item, par: currentPar, isEnd: index === wordLen - 1 })
    }
    currentPar += item
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
  for(let i = 0; i < wordLen; i++) {
    const item = wordArr[i]
    const currentPar = i === 0 ? '' : wordArr.slice(0, i).join('')
    const currentItem = tree[i + 1] && tree[i + 1].find(findItem => {
      return findItem.val === item && findItem.par === currentPar
    })
    if (currentItem) {
      if (isSearch && i === wordLen - 1) {
        isExist = currentItem.isEnd
      }
    } else {
      isExist = false
      break
    }
  }
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

const operateArr = ["insert","insert","search","search","search","insert","search","insert","insert","insert","insert","search","search","search","search","search","search","insert","search","search","insert","search","search","insert","search","insert","insert","insert","search","insert","search","insert","search","insert","search","insert","insert","search","search","search","search","insert","insert","insert","insert","search","insert","search","insert","insert","search","insert","insert","search","search","insert","search","insert","search","insert","insert","search","search","search","insert","search","search","search","search","search","insert","insert","insert","search","search","insert","search","search","insert","insert","search","search","insert","search","insert","search","insert","search","search","search","insert","search","insert","search","search","search","search","search","insert","insert","search","search","search","search","search","insert","insert","insert","search","insert","insert","search","insert","search","search","search","search","search","search","search","search","search","insert","insert","insert","insert","insert","insert","search","insert","insert","insert","search","search","insert","insert","search","search","search","insert","search","search","insert","insert","insert","insert","insert","insert","insert","insert","insert","search","search","search","insert","insert","insert","search","search","search","insert","search","insert","search","search","insert","search","insert","search","insert","insert","search","insert","insert","insert","insert","insert","insert","insert","search","search","insert","search","search","search","search","insert","insert","insert","insert","insert","search","insert","insert","search","search","search","insert","insert","insert","search","insert","search","search","search","search","insert","search","search","search","insert","search","insert","insert","search","search","insert","insert","search","search","search","search","search","search","search","insert","insert","search","insert","search","insert","search","search","insert","search","search","search","insert","search","insert","insert","search","insert","insert","search","insert","insert","search","insert","search","search","search","insert","search","search","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","search","search","insert","search","insert","insert","search","search","insert","search","insert","search","search","insert","insert","search","insert","search","insert","search","insert","search","insert","search","search","search","insert","insert","search","insert","insert","search","search","insert","insert","search","search","search","search","search","insert","search","insert","search","insert","search","search","search","insert","search","insert","search","search","search","search","insert","search","search","insert","insert","search","search","insert","insert","search","search","search","search","search","search","search","insert","insert","search","search","insert","insert","search","search","insert","insert","insert","search","insert","insert","insert","search","search","insert","insert","insert","search","search","search","insert","search","search","insert","insert","search","search","insert","insert","insert","insert","search","insert","insert","insert","search","insert","search","search","search"]

const dataArr = [["nemathelminth"],["entracte"],["nemathelminth"],["entracte"],["spittlestaff"],["spittlestaff"],["hematocrit"],["hematocrit"],["inachid"],["phthalan"],["mev"],["inachid"],["phthalan"],["mev"],["hematoid"],["kingmaking"],["brent"],["hematoid"],["epollicate"],["allegiant"],["kingmaking"],["zomotherapeutic"],["disinvolve"],["brent"],["prefashion"],["epollicate"],["allegiant"],["zomotherapeutic"],["vangeli"],["disinvolve"],["pucklike"],["prefashion"],["lysidine"],["vangeli"],["stingily"],["pucklike"],["lysidine"],["morong"],["counterclockwise"],["deemstership"],["turban"],["stingily"],["morong"],["counterclockwise"],["deemstership"],["impermeableness"],["turban"],["inattentively"],["impermeableness"],["inattentively"],["bonewort"],["bonewort"],["zincographer"],["zincographer"],["ultrasubtle"],["ultrasubtle"],["facingly"],["facingly"],["forchase"],["forchase"],["featherwing"],["featherwing"],["production"],["misesteem"],["production"],["chrysoaristocracy"],["nidorosity"],["shurf"],["gauche"],["crocidura"],["misesteem"],["chrysoaristocracy"],["nidorosity"],["spooning"],["orc"],["shurf"],["nonwestern"],["grus"],["gauche"],["crocidura"],["megaerg"],["jesus"],["spooning"],["subconformable"],["orc"],["bimonthly"],["nonwestern"],["frotton"],["interspinalis"],["kahau"],["grus"],["cosaque"],["megaerg"],["perilenticular"],["silenales"],["soapweed"],["concussion"],["stackage"],["jesus"],["subconformable"],["prehistorically"],["roomlet"],["unblissful"],["unestablish"],["vilipender"],["bimonthly"],["frotton"],["interspinalis"],["intramammary"],["kahau"],["cosaque"],["hispanidad"],["perilenticular"],["hemophilia"],["vitreously"],["taenite"],["kenogenesis"],["pyroelectric"],["whup"],["topmost"],["nigritude"],["consubstantiality"],["silenales"],["soapweed"],["concussion"],["stackage"],["prehistorically"],["roomlet"],["testor"],["unblissful"],["unestablish"],["vilipender"],["simonious"],["reactance"],["intramammary"],["hispanidad"],["colocentesis"],["infiltrate"],["maxima"],["hemophilia"],["expatiator"],["redbird"],["vitreously"],["taenite"],["kenogenesis"],["pyroelectric"],["whup"],["topmost"],["nigritude"],["consubstantiality"],["testor"],["apperceptive"],["groundliness"],["oneirocritical"],["simonious"],["reactance"],["colocentesis"],["splanchnic"],["cabinetworker"],["resinolic"],["infiltrate"],["tashnakist"],["maxima"],["betrunk"],["floretum"],["expatiator"],["melenic"],["redbird"],["phallales"],["apperceptive"],["groundliness"],["opisthocoelous"],["oneirocritical"],["splanchnic"],["cabinetworker"],["resinolic"],["tashnakist"],["betrunk"],["floretum"],["hyperdiastole"],["aminobenzoic"],["melenic"],["wormlike"],["schuhe"],["brahmahood"],["gutter"],["phallales"],["opisthocoelous"],["hyperdiastole"],["aminobenzoic"],["wormlike"],["interlace"],["schuhe"],["brahmahood"],["sounder"],["hyperactivity"],["crosse"],["gutter"],["interlace"],["sounder"],["demineralization"],["hyperactivity"],["sulfotelluride"],["polyparous"],["bifidated"],["sirene"],["crosse"],["inconfutable"],["cossette"],["protocanonical"],["demineralization"],["thanksgiving"],["sulfotelluride"],["polyparous"],["parisonic"],["holer"],["bifidated"],["sirene"],["tarepatch"],["promycelial"],["impone"],["metasomal"],["toweling"],["promissorily"],["intralaryngeally"],["inconfutable"],["cossette"],["redocket"],["protocanonical"],["terceron"],["thanksgiving"],["orthodome"],["pament"],["parisonic"],["agnathic"],["stageability"],["migratory"],["holer"],["sukiyaki"],["tarepatch"],["promycelial"],["synaloepha"],["impone"],["metasomal"],["tranquilize"],["toweling"],["promissorily"],["obsoletism"],["intralaryngeally"],["zecchini"],["umbone"],["uniridescent"],["redocket"],["pseudosiphuncal"],["pyelonephritic"],["terceron"],["orthodome"],["pament"],["agnathic"],["stageability"],["migratory"],["sukiyaki"],["synaloepha"],["tranquilize"],["obsoletism"],["miticidal"],["overmodesty"],["zecchini"],["dye"],["umbone"],["uniridescent"],["keraterpeton"],["intracosmical"],["pseudosiphuncal"],["snakily"],["pyelonephritic"],["elvis"],["nenuphar"],["miticidal"],["overmodesty"],["quaintness"],["dye"],["epileptoid"],["keraterpeton"],["subsultus"],["intracosmical"],["pseudophilosophical"],["snakily"],["lymph"],["alkahest"],["slimer"],["elvis"],["nenuphar"],["blackguardize"],["quaintness"],["epileptoid"],["echinodorus"],["peronosporaceous"],["subsultus"],["pseudophilosophical"],["dittogram"],["infatuatedly"],["lampyris"],["antitragus"],["hidden"],["lymph"],["sulphoarsenic"],["alkahest"],["arpeggiated"],["slimer"],["unvented"],["tribracteolate"],["vehemency"],["blackguardize"],["plunger"],["echinodorus"],["bacach"],["peasantlike"],["chrysarobin"],["capful"],["peronosporaceous"],["gymnothorax"],["photochemistry"],["dittogram"],["infatuatedly"],["palmatifid"],["rhodope"],["lampyris"],["antitragus"],["statuelike"],["arterialization"],["sunglo"],["throu"],["unirhyme"],["accompanist"],["hylarchic"],["hidden"],["sulphoarsenic"],["allicient"],["ophiurid"],["arpeggiated"],["unvented"],["floodboard"],["pistachio"],["tribracteolate"],["vehemency"],["plunger"],["eponym"],["bacach"],["peasantlike"],["chrysarobin"],["formidableness"],["approve"],["capful"],["gymnothorax"],["photochemistry"],["skiptail"],["consonate"],["germanesque"],["palmatifid"],["transcending"],["scorn"],["rhodope"],["statuelike"],["incarn"],["receivedness"],["arterialization"],["sunglo"],["throu"],["unirhyme"],["surviving"],["accompanist"],["hylarchic"],["allicient"],["quinaldinium"],["ophiurid"],["alumish"],["sphaerolitic"],["uneulogized"]]

for (let i = 0; i < operateArr.length; i++) {
  trie[operateArr[i]](dataArr[i][0])
}

// result - bad
// 15/15 cases passed (2204 ms)
// Your runtime beats 5.67 % of javascript submissions
// Your memory usage beats 18.13 % of javascript submissions (56.4 MB)

// @lc code=end
