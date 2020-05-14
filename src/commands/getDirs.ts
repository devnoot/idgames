import useApi from '../useApi'
import { APISuccess, APIError, APIWarning, APIDir } from '../index'

interface GetDirsWithId {
    /** The directory id. */
    id?: string
    /** The directory name (in full). Takes precedence over id. */
    name?: never
}

interface GetDirsWithName {
    /** The file id. If not present, must use file. */
    id?: never
    /** The directory name (in full). Takes precedence over id. */
    name?: string
}

interface APIGetDirsSuccess extends APISuccess {
    content: {
        dir?: APIDir[]
    }
}

type GetDirsOpts = GetDirsWithId | GetDirsWithName

/**
 * Returns the directories under the specified directory. If no directory is specified, then this returns all directories off of the root.
 */
export async function getDirs(opts: GetDirsOpts): Promise<APIError|APIWarning|APIGetDirsSuccess> {

    try {
        const data = await useApi('getdirs', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}