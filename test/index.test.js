const assert = require('assert')
const {
    ping,
    dbPing,
    about,
    get,
    getParentDir,
    getDirs,
    getFiles,
    getContents,
    latestVotes,
    latestFiles,
    search,
} = require('../dist/index')

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

    it('getparentdir', async () => {
        const res = await getParentDir({ id: '666' })
        assert(1)
    })

    it('getdirs', async () => {
        const res = await getDirs({ name: 'zvox' })
        assert(1)
    })

    it('getfiles by id', async () => {
        const res = await getFiles({ id: '666' })
        assert(1)
    })

    it('getfiles by name', async () => {
        const res = await getFiles({ name: 'scythe2' })
        assert(1)
    })

    it('getcontents by id', async () => {
        const res = await getContents({ id: '666' })
        assert(1)
    })

    it('getcontents by name', async () => {
        const res = await getContents({ name: 'dwango' })
        assert(1)
    })

    it('latestvotes', async () => {
        const res = await latestVotes({ limit: 25 })
        assert(1)
    })

    it('latestfiles', async () => {
        const res = await latestFiles({ limit: 10 })
        assert(res.content.file.length === 10)
    })

    it('search', async () => {
        const res = await search({ query: 'UDM2' })
        assert(1)
    })
})
