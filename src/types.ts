export type Response = {
    meta: {
        version: string | number
    }
    content?: unknown
    error?: {
        type: string
        message: string
    }
    warning?: {
        type: string
        message: string
    }
}

export type Params = {
    action: Commands
    out?: 'json' | 'xml'
}

export enum Commands {
    ping = 'ping',
    dbping = 'dbping',
    about = 'about',
    get = 'get',
    getparentdir = 'getparentdir',
    getdirs = 'getdirs',
    getfiles = 'getfiles',
    getcontents = 'getcontents',
    latestvotes = 'latestvotes',
    latestfiles = 'latestfiles',
    search = 'search',
}

export type File = {
    id: string
    title: string
    author: string
    description: string
    rating: string
}

export type ExtendedFile = File & {
    dir: string
    filename: string
    size: string
    age: string
    date: string
    email: string
    credits: string
    base: string
    buildtime: string
    editors: string
    bugs: string
    textfile: string
    votes: string
    url: string
    idgamesurl: string
}

export type Dir = { id: string; name: string }

export type Vote = {
    id: string
    file: string
    title: string
    rating: string
    text: string
}
export type Review = {
    text: string
    vote: string
    username: string
}

export type PingParams = Params & {
    action: Commands.ping
}

export type PingResponse = Response & {
    content: {
        status: string
    }
}

export type DbPingParams = Params & {
    action: Commands.dbping
}

export type DbPingResponse = Response & {
    content: {
        status: string
    }
}

export type AboutParams = Params & {
    action: Commands.about
}

export type AboutResponse = Response & {
    content: {
        credits: string
        copyright: string
        info: string
    }
}

export type GetParams = Params & {
    action: Commands.get
    id?: string
    file?: string
}

export type GetResponse = Response & {
    content: ExtendedFile & {
        reviews: Review[]
    }
}

export type GetParentDirParams = Params & {
    action: Commands.getparentdir
    id?: string
    name?: string
}

export type GetParentDirResponse = Response & {
    content: {
        id: string
        name: string
    }
}

export type GetDirsParams = Params & {
    action: Commands.getdirs
    id: string
    name: string
}

export type GetDirsResponse = Response & {
    content: Dir[]
}

export type GetFilesParams = Params & {
    action: Commands.getfiles
    id?: string
    name?: string
}

export type GetFilesResponse = Response & {
    content: ExtendedFile[]
}

export type GetContentsParams = Params & {
    action: Commands.getcontents
    id?: string
    name?: string
}

export type GetContentsResponse = Response & {
    content: ExtendedFile[] & Dir[]
}

export type LatestVotesParams = Params & {
    command: Commands.latestvotes
    limit?: number
}

export type LatestVotesResponse = Response & {
    content: Vote[]
}

export type LatestFilesParams = Params & {
    command: Commands.latestfiles
    limit?: number
    startid: number
}

export type LatestFilesResponse = Response & {
    content: File[]
}

export type SearchParams = Params & {
    action: Commands.search
    query: string
    type?:
        | 'filename'
        | 'title'
        | 'author'
        | 'description'
        | 'credits'
        | 'editors'
        | 'textfile'
    sort?: 'date' | 'filename' | 'size' | 'rating'
    dir?: 'asc' | 'desc'
}

export type SearchResponse = Response & {
    content: File[]
}
