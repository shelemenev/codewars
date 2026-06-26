// Описываем тип данных
interface Person {
  name: string
  age: number
}

// Объявляем generic‑функцию getProperty
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Создаём объект этого типа
const person: Person = {
  name: "Иван",
  age: 25
};

// Вызываем функцию
const personName = getProperty(person, "name"); // Тип name — string
const age = getProperty(person, "age");   // Тип age — number

console.log(personName)
console.log(age)