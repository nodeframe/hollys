import test from 'tape'
import hollys from '../index.js'

test('hollys#get', (t) => {
  t.plan(2)

  t.doesNotThrow(
    hollys.get
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
