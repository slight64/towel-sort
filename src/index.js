
// You should implement your task here.

module.exports = function towelSort (matrix) {
        return matrix === undefined ? [] : matrix.map((e,i) => i % 2 === 1? e.reverse() : e).flat()
    }
