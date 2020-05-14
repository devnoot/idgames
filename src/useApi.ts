import queryString from 'query-string'
import fetch from 'node-fetch'

export type APIActionType = 'ping' | 'dbping' | 'about' | 'get' | 'getparentdir' | 'getdirs' | 'getfiles' | 'getcontents' | 'latestvotes' | 'latestfiles' | 'search'

export default async function useApi(action: APIActionType, opts: any = undefined): Promise<any> 
{

    return new Promise((resolve, reject) => {

        const apiBaseUrl = 'https://www.doomworld.com/idgames/api/api.php'
        const outputType = 'json'

        const qs = { 
            action, 
            out: outputType,
            ...opts 
        }

        const url = `${apiBaseUrl}?${queryString.stringify(qs)}`

        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })

}