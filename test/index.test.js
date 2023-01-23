const assert = require('assert')
const { IdGamesArchiveAPI } = require('../dist/index')

describe('API Tests', () => {
    it('ping', async () => {
        const result = await IdGamesArchiveAPI.ping()
        assert.equal(result, true)
    })
})
