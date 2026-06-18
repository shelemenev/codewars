const obj = {
  name: 'Alex',
  getName: function() {
    return this.name
  }
}
console.log(obj.getName())
