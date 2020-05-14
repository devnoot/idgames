# idgames-archive-api
This is a wrapper around the idgames archive public API documented at https://www.doomworld.com/idgames/api/

Further documentation for this package can be found at https://doom2network.github.io/idgames-archive-api/ 

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
import { IdGamesArchiveAPI } from 'idgames-archive-api'
```

### Methods

Each method in `IdGamesArchiveAPI` will return a promise resolving in the requested data. The following methods are available.

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

    const ping = await IdGamesArchiveAPI.ping()

    const dbping = await IdGamesArchiveAPI.dbPing()

    const about = await IdGamesArchiveAPI.about()

    const get = await IdGamesArchiveAPI.get({ id: '15156' })

    const getParentDir = await IdGamesArchiveAPI.getParentDir({ name: 'levels/doom/a-c/' })

    const getDirs = await IdGamesArchiveAPI.getDirs({ name: 'levels/doom2/' })

    const getFiles = await IdGamesArchiveAPI.getFiles({ name: 'levels/doom/megawads/' })

    const getContents = await IdGamesArchiveAPI.getContents({ name: 'levels/doom/' })

    const latestVotes = await IdGamesArchiveAPI.latestVotes({ limit: 100 })

    const latestFiles = await IdGamesArchiveAPI.latestFiles({ limit: 10 })

    const search = await IdGamesArchiveAPI.search({ query: 'chest', type: 'filename', sort: 'date' })

}

runner()

```

### Usage with `promises`

```javascript
function nonAsyncRunner() {
    IdGamesArchiveAPI.getContents({ name: 'levels/doom/' })
        .then(data => {
            const firstTitle = data.content.file[0].title
            IdGamesArchiveAPI.search({ query: firstTitle })
                .then(console.log)
                .catch(console.error)
            }
        })
        .catch(console.error)
}

nonAsyncRunner()
```
