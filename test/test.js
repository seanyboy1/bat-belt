import { describe, Try } from 'riteway'
import exercises from '../solution'

describe('each', async assert => {
  const iteratee = (val, i, list) => iterateeArguments.push([val, i, list])
  let iterateeArguments = []

  exercises.each([], iteratee)

  assert({
    given: 'empty array',
    should: 'not call the callback',
    actual: iterateeArguments,
    expected: []
  })

  iterateeArguments = []
  const list = ['a', 'b', 'c']
  exercises.each(list, iteratee)

  assert({
    given: 'array of values',
    should: 'loop over all elements, and call the callback passing in the value, index, and array for each element.',
    actual: iterateeArguments,
    expected: [
      ['a', 0, list],
      ['b', 1, list],
      ['c', 2, list],
    ]
  })
})

describe('map', async assert => {
  const iteratee = (val, i, list) => iterateeArguments.push([val, i, list])
  let iterateeArguments = []

  exercises.map([], iteratee)

  assert({
    given: 'empty array',
    should: 'not call the callback',
    actual: iterateeArguments,
    expected: []
  })

  assert({
    given: 'empty array',
    should: 'return an empty array',
    actual: exercises.map([], x => x*2),
    expected: []
  })


  iterateeArguments = []
  const list = ['a', 'b', 'c']
  exercises.map(list, iteratee)

  assert({
    given: 'array of values',
    should: 'loop over all elements, and call the callback passing in the value, index, and array for each element.',
    actual: iterateeArguments,
    expected: [
      ['a', 0, list],
      ['b', 1, list],
      ['c', 2, list],
    ]
  })

  assert({
    given: 'array of numbers and a double function',
    should: 'return a new array of all the doubled numbers',
    actual: exercises.map([1,2,3,4], x => x*2),
    expected: [2,4,6,8]
  })

  const xs = [1,2,3,4,5]
  const result = exercises.map(xs, x => x*3)

  assert({
    given: 'an array and a callback',
    should: 'return a new array without modifying the original',
    actual: [xs, result],
    expected: [[1,2,3,4,5], [3,6,9,12,15]]
  })

})





