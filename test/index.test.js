const assert = require('assert')
const { ping, dbPing, about, get, latestFiles } = require('../dist/API')

describe('API Tests', () => {
    it('ping', async () => {
        const res = await ping()
        assert(res.content.status === 'true')
    })

    it('dbping', async () => {
        const res = await dbPing()
        assert(res.content.status === 'true')
    })

    it('about', async () => {
        const res = await about()
        assert(typeof res.content.credits === 'string')
        assert(typeof res.content.copyright === 'string')
        assert(typeof res.content.info === 'string')
    })

    it('get', async () => {
        const res = await get({ id: '666' })
        assert((res.content.id = 666))
        assert(typeof res.content.title === 'string')
    })

    it('latestfiles', async () => {
        const res = await latestFiles({ limit: 10 })
        assert(res.content.file.length === 10)
    })
})
