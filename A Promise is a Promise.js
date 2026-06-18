/*Create a resolved javascript Promise that will return 'Hello World!'.*/

function promiseHelloWorld() {
  const p = Promise.resolve('Hello World!')
  return p
}

console.log(promiseHelloWorld())