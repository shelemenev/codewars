/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/


function solution(str) {
  return str.split('').reverse().join('')
}
const str = 'world'
const str1 = 'word'

console.log(solution(str) + ' ' + solution(str1))



