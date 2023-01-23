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

export type APIProps = {
    action: APIActionType
    baseUrl?: string
    outputType?: string
}

export type APIPingResponse = {
    status: string
}

export type APIAboutResponse = {
    /** Who made this awesome thing possible. */
    credits: string
    /** Copyright information regarding this API. */
    copyright: string
    /** Additional info. */
    info: string
}

class API {
    private _baseUrl: string
    private _outputType: string
    constructor({
        baseUrl = 'https://doomworld.com/idgames/api/api.php',
        outputType = 'json',
    }: APIProps) {
        this._baseUrl = baseUrl
        this._outputType = outputType
    }

    private async _checkResponse(action: APIActionType, statusCode: number) {
        if (statusCode !== 200) {
            throw new Error(`${action} failed with status code ${statusCode}`)
        }
    }

    private _buildUrl(action: APIActionType) {
        const url = new URL(this._baseUrl)
        url.searchParams.set('action', action)
        url.searchParams.set('out', this._outputType)
        return url
    }

    private async _request(action: APIActionType) {
        const url = this._buildUrl(action)
        const { body, statusCode } = await request(url)
        this._checkResponse(action, statusCode)
        const json = await body.json()

        if (action === 'ping' || action === 'dbping') {
            return {
                statusCode,
                action,
                data: json?.content as APIPingResponse,
            }
        } else if (action === 'about') {
            return {
                statusCode,
                action,
                data: json?.content as APIAboutResponse,
            }
        } else if (action === 'get') {
        } else {
            console.error(`Action ${action} not implemented.`)
        }
    }

    public async ping() {
        return await this._request('ping')
    }

    public async dbping() {
        return await this._request('dbping')
    }

    public async about() {
        return await this._request('about')
    }
}
