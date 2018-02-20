
module.exports = function getLoveTrianglesCount (preferences = []) {
  triangles = new Set([])

  preferences.forEach(function (item, index, array) {
    if (array[array[item - 1] - 1] == index + 1) {
      candidates = new Set([index, item - 1, array[item - 1] - 1])
      if (candidates.size == 3) {
        triangles.add(Array.from(candidates).sort().join('_'))
      }
    }
  })

  return triangles.size
}
