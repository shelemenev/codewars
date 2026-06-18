const obj = {
  name: 'Alex',
  getName: () => {
    return obj.name
  }
}
console.log(obj.getName())

