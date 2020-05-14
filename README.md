# idgames-archive-api
This is a wrapper around the idgames archive public API documented at https://www.doomworld.com/idgames/api/

Documentation for this package can be found at **placeholder** 

## Installation

```
yarn add idgames-archive-api
```
or

```
npm install idgames-archive-api
```

## Usage

### Importing the library

```
import { IdGamesPublicAPI } from 'idgames-public-api'
```

### Methods

Each method in `IdGamesPublicAPI` will return a promise resolving in the requested data. The following methods are available.

- ping
- dbPing
- about
- get
- getParentDir
- getDirs
- getContents
- latestVotes
- latestFiles
- search


## Quick start

### Usage with `async/await`

```javascript

async function runner() {

    const ping = await IdGamesPublicAPI.ping()

    const dbping = await IdGamesPublicAPI.dbPing()

    const about = await IdGamesPublicAPI.about()

    const get = await IdGamesPublicAPI.get({ id: '15156' })

    const getParentDir = await IdGamesPublicAPI.getParentDir({ name: 'levels/doom/a-c/' })

    const getDirs = await IdGamesPublicAPI.getDirs({ name: 'levels/doom2/' })

    const getFiles = await IdGamesPublicAPI.getFiles({ name: 'levels/doom/megawads/' })

    const getContents = await IdGamesPublicAPI.getContents({ name: 'levels/doom/' })

    const latestVotes = await IdGamesPublicAPI.latestVotes({ limit: 100 })

    const latestFiles = await IdGamesPublicAPI.latestFiles({ limit: 10 })

    const search = await IdGamesPublicAPI.search({ query: 'chest', type: 'filename', sort: 'date' })

}

runner()

```

### Usage with `promises`

```javascript
function nonAsyncRunner() {
    IdGamesPublicAPI.getContents({ name: 'levels/doom/' })
        .then(data => {
            const firstTitle = data.content.file[0].title
            IdGamesPublicAPI.search({ query: firstTitle })
                .then(console.log)
                .catch(console.error)
            }
        })
        .catch(console.error)
}

nonAsyncRunner()
```