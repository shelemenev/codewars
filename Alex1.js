const obj = {
  name: 'Alex',
  getName: function() {
    return this.name
  }
}
const fn = obj.getName.call(obj)
