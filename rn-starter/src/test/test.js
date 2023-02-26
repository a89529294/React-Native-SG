const curry = (fn) => {
  const curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
  return curried
}

const add = (a, b, c, d) => a + b + c + d
const curriedAdd = curry(add)
const result = curriedAdd(1)(2)(3)(4)

console.log(result)
