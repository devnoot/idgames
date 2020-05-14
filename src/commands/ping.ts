import useApi from '../useApi'
import { APISuccess, APIError } from '../index'

interface APIPingSuccess extends APISuccess {
    content: {
        status: string
    }
}

/**
 * Sends back "true". This is just for testing if the server hosting this API is up.
 */
export async function ping(): Promise<APIPingSuccess|APIError> {

    try {
        const data = await useApi('ping')
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}