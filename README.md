# idgames

This is a wrapper around the idgames archive public API documented at https://www.doomworld.com/idgames/api/

## Quick Start

```bash
npm install idgames
```

```typescript
import { ping, dbPing, about, get, getParentDir, getDirs, getContents, latestVotes, latestFiles, search } from 'idgames'

;(async () => {
    const ping = await ping()

    const dbping = await dbPing()

    const about = await about()

    const get = await get({ id: '15156' })

    const getparentdir = await getParentDir({ id: '666' })

    const getdirs = await getDirs({ name: 'zvox' })

    const getfiles = await getFiles({ id: '10666' })

    const getcontents = await getContents({ id: '666' })

    const latestvotes = await latestVotes({ limit: 25 })

    const latestfiles = await latestFiles({ limit: 10 })

    const search = await search({ query: 'UDM2' })
})()
```

## Usage

### Methods

Each function in this package will return a promise resolving in the requested data. The following functions are available.

-   ping
-   dbPing
-   about
-   get
-   getParentDir
-   getDirs
-   getContents
-   latestVotes
-   latestFiles
-   search

## Contributions

Please issue a pull request
