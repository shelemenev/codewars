function debounce(func, delay) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), delay)
    }
}

const logWithDebounce = debounce((str) => console.log(str), 300)

logWithDebounce('Вызов 1')
setTimeout(() => logWithDebounce('Вызов 2'), 200)
setTimeout(() => logWithDebounce('Вызов 3'), 550)
setTimeout(() => logWithDebounce('Вызов 4'), 600)
setTimeout(() => logWithDebounce('Вызов 5'), 700)