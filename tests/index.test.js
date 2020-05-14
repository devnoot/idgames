/**
 * @description This is a naive test and should eventually be put in a testing framework like mocha
 * With that said, this test should run every api command with the same parameters as the examples
 * on https://www.doomworld.com/idgames/api/
 * 
 * @author devnoot <devnoot@gmail.com>
 * @license MIT
 */

const {ping} = require('../dist/commands/ping')
const {dbPing} = require('../dist/commands/dbping')
const {about} = require('../dist/commands/about')
const {get} = require('../dist/commands/get')
const {getParentDir} = require('../dist/commands/getParentDir')
const {getDirs} = require('../dist/commands/getDirs')
const {getFiles} = require('../dist/commands/getFiles')
const {getContents} = require('../dist/commands/getContents')
const {latestVotes} = require('../dist/commands/latestVotes')
const {latestFiles} = require('../dist/commands/latestFiles')
const {search} = require('../dist/commands/search')

function main(args)
{

    function handleError(error) {
        throw error
    }

    async function runApiTests() {

        // Test ping
        try {
            const data = await ping()
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test dbping
        try {
            const data = await dbPing()
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test about
        try {
            const data = await about()
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test get
        try {
            const data = await get({ id: '15156' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test get
        try {
            const data = await getParentDir({ name: 'levels/doom/a-c/' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test getDirs
        try {
            const data = await getDirs({ name: 'levels/doom2/' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test getFiles
        try {
            const data = await getFiles({ name: 'levels/doom/megawads/' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test getContents
        try {
            const data = await getContents({ name: 'levels/doom/' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test latestVotes
        try {
            const data = await latestVotes({ limit: 100 })
            console.info(data)
        } catch (error) {
            handleError(error)
        }


        // Test latestFiles
        try {
            const data = await latestFiles({ limit: 10 })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

        // Test latestFiles
        try {
            const data = await search({ query: 'chest', type: 'filename', sort: 'date' })
            console.info(data)
        } catch (error) {
            handleError(error)
        }

    }

    runApiTests()

}

main(process.env)