import fetch from 'node-fetch'
import { request } from 'undici'

export type APIActionType =
    | 'ping'
    | 'dbping'
    | 'about'
    | 'get'
    | 'getparentdir'
    | 'getdirs'
    | 'getfiles'
    | 'getcontents'
    | 'latestvotes'
    | 'latestfiles'
    | 'search'

type useApi = {
    action: APIActionType
    baseUrl?: string
    outputType?: string
    [key: string]: any
}

type useApiResult = {
    action: APIActionType
    data: any
    statusCode: number
    url: string
}

const useApi = async ({
    action,
    baseUrl = 'https://doomworld.com/idgames/api/api.php',
    outputType = 'json',
    ...rest
}: useApi): Promise<useApiResult> => {
    const url = new URL(baseUrl)
    url.searchParams.set('action', action)
    url.searchParams.set('out', outputType)

    Object.entries(rest).forEach(([k, v]) => url.searchParams.set(k, `${v}`))

    const { body, statusCode } = await request(url)

    if (statusCode !== 200) {
        throw new Error(`Request failed with status code ${statusCode}`)
    }

    const data = await body.json()

    return {
        action,
        data,
        statusCode,
        url: url.toString(),
    }
}

export default useApi
