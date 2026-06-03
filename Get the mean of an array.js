/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

const getAverage = (marks) => {
   const sum = marks.reduce((acc, currentValue) => acc + currentValue, 0)
   return Math.floor(sum / marks.length)
}
const marks = [5,4,1,2,3,5,7,9]
console.log(getAverage(marks))