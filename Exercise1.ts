/*Exercise:
    Given the data, define the interface "User" and use it accordingly.

export type User = unknown

export const users: unknown[] = [
    {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
    },
    {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:')
users.forEach(logPerson)
*/

export interface User {
    name: string
    age: number
    occupation: string
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
]

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:')
users.forEach(logPerson)

/*
Что было исправлено и зачем
Заменён type на interface. Для описания структуры объектов в TypeScript предпочтительнее использовать interface.

Указаны конкретные типы вместо unknown. Использование unknown отключает проверку типов. Замена на User и User[] позволяет TypeScript проверять корректность данных на этапе компиляции.

Обеспечена типобезопасность. Теперь компилятор будет выдавать ошибку, если попытаться передать в logPerson объект без полей name и age или с полями неверного типа.
*/
