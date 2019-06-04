describe('Integration Test', function() {
  before(async function() {
    const app = require('../api/app')(config)
  })

  require('./graphql')
})
