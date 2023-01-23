import useApi, { APIActionType } from '../useApi'
import { APIError, APISuccess } from '../index'

export interface APIAboutSuccess extends APISuccess {
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

const about = async () => await useApi({ action: 'about' })

export default about
