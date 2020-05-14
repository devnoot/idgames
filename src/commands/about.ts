import useApi from '../useApi'
import { APIError, APISuccess } from '../index'

interface APIAboutSuccess extends APISuccess {
    /** Who made this awesome thing possible. */
    credits: string
    /** Copyright information regarding this API. */
    copyright: string
    /** Additional info. */
    info: string
}

/**
 * Sends back info about the API.
 */
export async function about(): Promise<APIAboutSuccess|APIError> {

    try {
        const data = await useApi('about')
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}
