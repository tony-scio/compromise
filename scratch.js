// const nlp = require('./src/index')
const nlp = require('./alt')
// nlp.extend(require('./plugins/rule-machine/src'))
// nlp.extend(require('./plugins/dates/src'))
// nlp.extend(require('./plugins/typeahead/src'))
// const spacetime = require('/Users/spencer/mountain/spacetime')
// nlp.extend(require('./plugins/sentences/src'))
// const text =  require('/Users/spencer/mountain/compromise/scripts/perf/flame/_sotu-text.js')
// const fmt = iso => (iso ? spacetime(iso).format('{day-short} {nice} {year}') : '-')
// nlp.verbose(true)

// const { get, make } = require('garbage-patch')

let doc = nlp(`he'd really see. I know his number really now.`)
// doc.cache()
// console.log(doc._cache)
// console.log(doc.found)
// console.log(doc.json())
// doc = doc.update(['/0/2'])
console.log(doc.match('know his [<foo>number really] [now]').text())
// console.log(doc.text())

// console.log(nlp.parseMatch('no [#Noun] and [<foo>cool] [fun and stuff]'))
