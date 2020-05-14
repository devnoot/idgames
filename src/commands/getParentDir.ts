import useApi from '../useApi'
import { APISuccess, APIError, APIWarning } from '../index'

interface GetParentDirOptsWithId {
    /** The directory id. If not present, must use name. */
    id: string
    /** The directory name (in full). If not present, must use id. */
    name?: never
}

interface GetParentDirOptsWithName {
    /** The directory id. If not present, must use name. */
    id?: never
    /** The directory name (in full). If not present, must use id. */
    name: string
}

type GetParentDirOpts = GetParentDirOptsWithId | GetParentDirOptsWithName

interface APIGetParentDirsSuccess extends APISuccess {
    content: {
        /** Id of the parent directory. */
        id: string
        /** Name of the parent directory. */
        name: string
    }
}

/**
 * Returns the parent directory of the specified directory.
 */
export async function getParentDir(opts: GetParentDirOpts): Promise<APIGetParentDirsSuccess|APIWarning|APIError> {

    try {
        const data = await useApi('getparentdir', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}