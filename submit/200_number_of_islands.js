var numIslands = function(grid) {
  let total = 0
  if (grid.length === 0) { return total }
  /**
   * DFS
   * 遍历到【1】时，重置为【0】，然后把这个元素的上下左右是【1】的也重置为【0】
  */
 const rowLen = grid.length
 const colLen = grid[0].length
  grid.map((item, rowIndex) => {
    item.map((subItem, columnIndex) => {
      if (subItem === '1') {
        total += 1 // 岛屿数量 +1
        setAround(rowIndex, columnIndex, grid, rowLen, colLen)
      }
    })
  })
  return total
}

function setAround(rowIndex, columnIndex, grid, rowLen, colLen) {
  if (rowIndex < 0 || columnIndex < 0 || rowIndex > rowLen - 1 || columnIndex > colLen - 1 || grid[rowIndex][columnIndex] === '0') { 
    return false
  }
  grid[rowIndex][columnIndex] = '0'
  setAround(rowIndex - 1, columnIndex, grid, rowLen, colLen)
  setAround(rowIndex, columnIndex + 1, grid, rowLen, colLen)
  setAround(rowIndex + 1, columnIndex, grid, rowLen, colLen)
  setAround(rowIndex, columnIndex - 1, grid, rowLen, colLen)
}

const data1 = [["0","1","0","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
// 01010
// 11010
// 11000
// 00000
// 2

const data2 = [["0","1","0","1","0"],["1", "0", "1", "0", "1"],["0","1","0","1","0"],["1", "0", "1", "0", "1"]]
// 01010
// 10101
// 01010
// 10101
// 10

const data3 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
// 11000
// 11000
// 00100
// 00011
// 3

const data4 = [["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]
// 11111
// 11111
// 11111
// 11111
// 1

const data5 = [["1","1","1"],["0","1","0"],["1","1","1"]]
// 111
// 010
// 111
// 1

console.log(numIslands(data4))