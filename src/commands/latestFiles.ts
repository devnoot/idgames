import useApi from '../useApi'
import { APIFileBase, APISuccess, APIError, APIWarning } from '../index'

interface LatestFilesOpts {
    /** The amount to return. If not specified, or is too large, assumes the maximum allowed. */
    limit?: number
    /** If specified, this is the file id to start from instead of the latest id. */
    startid?: string
}

interface APILatestFilesSuccess extends APISuccess {
    content: {
        file?: APIFileBase[]
    }
}

/**
 * Returns the latest files submitted, date descending.
 */
export async function latestFiles(opts: LatestFilesOpts | null): Promise<APIError|APIWarning|APILatestFilesSuccess> {

    try {
        const data = await useApi('latestfiles', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}