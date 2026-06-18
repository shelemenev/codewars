const createObj = (name) => {
  return {
    name,
    getName: () => name 
  }
}

const obj = createObj('Alex')
const fn = obj.getName
console.log(fn())


