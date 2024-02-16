import fractions from './fractions/api.js'
import numbers from './numbers/api.js'

const api = function (View) {
  fractions(View)
  numbers(View)
}

export default {
  api,

  // add @greaterThan, @lessThan
  mutate: world => {
    let termMethods = world.methods.one.termMethods

    termMethods.lessThan = function (term) {
      console.log(term)
      // return /[aeiou]/.test(term.text)
    }
  },
}
