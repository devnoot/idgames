import useApi from '../useApi'
import { APIError, APISuccess } from '../index'

interface APIDbPingSuccess extends APISuccess {
    content: {
        status: string
    }
}

/**
 * Sends back "true" if the database connection is active. Returns an error if not.
 */
export async function dbPing(): Promise<APIDbPingSuccess|APIError> {

    try {
        const data = await useApi('dbping')
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}