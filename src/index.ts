import axios from 'axios'

import {
    Commands,
    DbPingResponse,
    GetContentsResponse,
    GetDirsResponse,
    GetFilesResponse,
    GetParentDirResponse,
    GetResponse,
    LatestFilesResponse,
    LatestVotesResponse,
    PingResponse,
    SearchResponse,
} from './types'

const defaultBaseUrl = new URL('https://doomworld.com/idgames/api/api.php')
const defaultOutputType = 'json'

export const ping = async ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}): Promise<PingResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.ping)
    url.searchParams.set('out', outputType)
    const res = await axios.get(url.toString())
    return await res.data
}

export const dbPing = async ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}): Promise<DbPingResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.dbping)
    url.searchParams.set('out', outputType)
    const res = await axios.get(url.toString())
    return await res.data
}

export const about = async ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}): Promise<DbPingResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.about)
    url.searchParams.set('out', outputType)
    const res = await axios.get(url.toString())
    return await res.data
}

export const get = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    id = undefined,
    file = undefined,
}): Promise<GetResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.get)
    url.searchParams.set('out', outputType)
    if (id) url.searchParams.set('id', id)
    if (file) url.searchParams.set('file', file)
    const res = await axios.get(url.toString())
    return await res.data
}

export const getParentDir = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    id = undefined,
    name = undefined,
}): Promise<GetParentDirResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.get)
    url.searchParams.set('out', outputType)
    if (id) url.searchParams.set('id', id)
    if (name) url.searchParams.set('name', name)
    const res = await axios.get(url.toString())
    return await res.data
}

export const getDirs = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    id = undefined,
    name = undefined,
}): Promise<GetDirsResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.get)
    url.searchParams.set('out', outputType)
    if (id) url.searchParams.set('id', id)
    if (name) url.searchParams.set('name', name)
    const res = await axios.get(url.toString())
    return await res.data
}

export const getFiles = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    id = undefined,
    name = undefined,
}): Promise<GetFilesResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.get)
    url.searchParams.set('out', outputType)
    if (id) url.searchParams.set('id', id)
    if (name) url.searchParams.set('name', name)
    const res = await axios.get(url.toString())
    return await res.data
}

export const getContents = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    id = undefined,
    name = undefined,
}): Promise<GetContentsResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.get)
    url.searchParams.set('out', outputType)
    if (id) url.searchParams.set('id', id)
    if (name) url.searchParams.set('name', name)
    const res = await axios.get(url.toString())
    return await res.data
}

export const latestVotes = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    limit = undefined,
}): Promise<LatestVotesResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.latestvotes)
    url.searchParams.set('out', outputType)
    if (limit) url.searchParams.set('limit', limit)
    const res = await axios.get(url.toString())
    return await res.data
}

export const latestFiles = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    limit = undefined,
    startid = 0,
}): Promise<LatestFilesResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.latestfiles)
    url.searchParams.set('out', outputType)
    if (limit) url.searchParams.set('limit', limit)
    if (startid) url.searchParams.set('startid', String(startid))
    const res = await axios.get(url.toString())
    return await res.data
}

export const search = async ({
    baseUrl = defaultBaseUrl,
    outputType = defaultOutputType,
    query = undefined,
    type = undefined,
    sort = undefined,
    dir = undefined,
}): Promise<SearchResponse> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', Commands.search)
    url.searchParams.set('out', outputType)
    if (query) url.searchParams.set('query', query)
    if (type) url.searchParams.set('type', type)
    if (sort) url.searchParams.set('sort', sort)
    if (dir) url.searchParams.set('dir', dir)
    const res = await axios.get(url.toString())
    return await res.data
}
