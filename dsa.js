// Section 3: String Reversal
function reverse(str) {
  // let result = ''
  // for (let i = str.length-1; i >= 0; i--) {
  //     result += str[i]
  // }
  // return result

  // return str.split('').reverse().join('')

  return str.split('').reduce((reversed, char) => char + reversed, '')
}
console.log(reverse('hello'))

// Section 4: Palindromes
function palindrome(str) {
  // return str === str.split('').reverse().join('')

  // return str === str.split('').reduce((reversed, char) => char + reversed, '')

  // for (let i = 0, j = str.length - 1; i < j; i++, j--) {
  //   if (str[i] !== str[j]) return false
  // }
  // return true

  return str.split('').every((char, i) => char === str[str.length - 1 - i])
}
console.log(palindrome('abcdcba'))

// Section 5: Integer Reversal
function reverseInt(n) {
  // if(n < 0) {
  //     return 0 - Number(String(n).split('').reverse().join('').slice(0, -1))
  // }
  // return Number(String(n).split('').reverse().join(''))

  // const arr = n < 0 ? ['-'] : []
  // n = Math.abs(n)

  // while(Math.abs(n) > 9) {
  //     arr.push(n % 10)
  //     n = (n - (n % 10)) / 10
  // }
  // arr.push(n)

  // return Number

  // const isNegative = n < 0 ? true : false
  // let reversedNum = 0
  // n = isNegative ? -n : n

  // while (n !== 0) {
  //   reversedNum = reversedNum * 10 + (n % 10)
  //   n = (n / 10) | 0
  // }
  // return isNegative ? -reversedNum : reversedNum

  const reversedNum = n.toString().split('').reverse().join('')
  return reversedNum * Math.sign(n)
}
console.log(reverseInt(123400))

// Section 6: MaxChars
function maxChar(str) {
  // const charMap = new Map()
  const charMap = {}
  let maxNum = 0
  let maxCh = ''

  for (let char of str.split('')) {
    // charMap.set(char, charMap.get(char) + 1 || 1)
    charMap[char] = charMap[char] + 1 || 1
    // if (charMap.get(char) > maxNum) {
    //   maxNum = charMap.get(char)
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxCh = char
    }
  }
  return maxCh
}
console.log(maxChar('csdyyyyyyfasdfaaa'))

// Section 7: FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = ''
    i % 3 === 0 && (output += 'fizz')
    i % 5 === 0 && (output += 'buzz')
    console.log(output || i)
  }
}
fizzBuzz(15)

// Section 8: Array Chunking
function chunk(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    // result.push(array.slice(i, i + size))
    const innerArr = []
    for (let j = i; j < i + size && j < array.length; j++) {
      innerArr.push(array[j])
    }
    result.push(innerArr)
  }
  return result
}
console.log(chunk([0, 1, 2, 3, 4, 5, 6], 2))

// Section 9: Anagrams
function anagrams(stringA, stringB) {
  // remove spaces, extra characters and lowercase both inputs
  // cast strings to arrays, sort them, join them and compare them
  const cleanStr = str =>
    str
      .replace(/[^a-zA-Z]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  return cleanStr(stringA) === cleanStr(stringB)

  // const stringMapMaker = str => {
  //   const stringMap = {}
  //   for (const char of str.replace(/[^a-zA-Z]/g, '').toLowerCase()) {
  //     stringMap[char] = stringMap[char] + 1 || 1
  //   }
  //   return stringMap
  // }
  // const stringMapA = stringMapMaker(stringA)
  // const stringMapB = stringMapMaker(stringB)

  // if (Object.keys(stringMapA).length !== Object.keys(stringMapB).length) {
  //   return false
  // }

  // for (const key of Object.keys(stringMapA)) {
  //   if (stringMapA[key] !== stringMapB[key]) return false
  // }

  // return true
}
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

// Section 10: Sentence Capitalization
function capitalize(str) {
  // return str
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.slice(1))
  //   .join(' ')
  let capitalizedStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capitalizedStr += str[i].toUpperCase()
    } else if (str[i - 1] === ' ') {
      capitalizedStr += str[i].toUpperCase()
    } else {
      capitalizedStr += str[i]
    }
  }
  return capitalizedStr
}
console.log(capitalize('how are you doing?'))

// Section 11: Printing Steps
function steps(n, row = 0, stair = '') {
  // iterate 1 to n inclusive
  // print i number of # and n - i number of spaces
  // for (let i = 1; i <= n; i++) {
  //   let logString = ''
  //   for (let j = 1; j <= n; j++) {
  //     j <= i ? (logString += '#') : (logString += ' ')
  //   }
  //   console.log(logString)
  // }
  // for (let i = 1; i <= n; i++) {
  //   console.log('#'.repeat(i) + ' '.repeat(n - i))
  // }
  if (n === row) return
  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }
  stair.length <= row ? (stair += '#') : (stair += ' ')
  steps(n, row, stair)
}
steps(5)

// Section 12: Two Sided Steps - Pyramids
function pyramid(n, row = 0, level = '') {
  // iterate n levels and print each step
  // print n - i ' ' on start and end
  // print i * 2 - 1 number of # in the middle
  // for (let i = 1; i <= n; i++) {
  //   console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i))
  // }
  const totalColumns = 2 * n - 1
  if (n === row) return
  if (totalColumns === level.length) {
    console.log(level)
    return pyramid(n, row + 1)
  }
  const midpoint = Math.floor(totalColumns / 2)
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += '#'
  } else {
    level += ' '
  }
  pyramid(n, row, level)
}
pyramid(4)

// Section 13: Find the Vowels
function vowels(str) {
  // let count = 0
  // // const vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }
  // // for (let i = 0; i < str.length; i++) {
  // //   vowels[str[i].toLowerCase()] && count++
  // // }
  // const vowelChars = new Set(['a', 'e', 'i', 'o', 'u'])
  // for (const char of str.toLowerCase()) {
  //   vowelChars.has(char) && count++
  // }
  // return count
  return str.match(/[aeiou]/gi).length || 0
}
console.log(vowels('Hello World'))

// Section 14: Enter the Matrix Spiral
function matrix(n) {
  let startRow = 0
  let startCol = 0
  let endRow = n - 1
  let endCol = n - 1
  let counter = 1
  let matrix = []

  for (let i = 0; i < n; i++) {
    matrix.push([])
  }

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let i = startCol; i <= endRow; i++) {
      matrix[startRow][i] = counter
      counter++
    }
    startRow++

    // right column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter
      counter++
    }
    endCol--

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter
      counter++
    }
    endRow--

    // left column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter
      counter++
    }
    startCol++
  }
  return matrix
}
console.log(matrix(4))

// Section 15: Runtime Complexity
// Big(O) review

// Section 16: Runtime Complexity in Practice - Fibonacci
function fib(n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)

  // if (n < 2) return n
  // let prev = 0
  // let curr = 1
  // for (let i = 2; i <= n; i++) {
  //   ;[prev, curr] = [curr, prev + curr]
  // }
  // return curr
}

function memoize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = args.length === 1 ? args[0] : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

fib = memoize(fib)
console.log(fib(10))

// Section 17: The Queue
class Queue {
  constructor() {
    this.queue = []
  }

  add(val) {
    this.queue.unshift(val)
  }

  remove() {
    return this.queue.pop()
  }
}
