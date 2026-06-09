/*This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
*/

function buildFun(N) {
  const funArray = []

  for (let i = 0; i < N; i++) {
    funArray.push(function() {
      return i
    })
  }

  return funArray
}

const functions = buildFun(5)
functions.forEach((func, index) => {
  console.log(`Функция ${index} возвращает: ${func()}`)
})
