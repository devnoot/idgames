# idgames

This is a wrapper around the idgames archive public API documented at https://www.doomworld.com/idgames/api/

## Quick Start

```bash
npm install idgames
```

```typescript
import { ping, dbPing, about, get } from 'idgames'

;(async () => {
    const ping = await ping()

    const dbping = await dbPing()

    const about = await about()

    const get = await get({ id: '15156' })
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

If there are parameters required (the official API docs will show this), you can pass them into the function like so

```typescript
const latestFiles = await latestFiles({ limit: 5, startid: 100 })
```

## Contributions

Please issue a pull request
