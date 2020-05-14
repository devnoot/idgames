import useApi from '../useApi'
import { APIError, APIFile, APIDir, APIWarning } from '../index'

interface GetContentsOptsWithId {
    /** The directory id. If not present, must use name. */
    id: string
    /** The directory name (in full). If not present, must use id. */
    name?: never
}

interface GetContentsOptsWithName {
    /** The directory id. If not present, must use name. */
    id?: never
    /** The directory name (in full). If not present, must use id. */
    name: string
}

type GetContentsOpts = GetContentsOptsWithId | GetContentsOptsWithName

interface APIGetContentsSuccess {
    content: {
        file?: APIFile[],
        dir?: APIDir[]
    }
}

/**
 * Returns the files and directories under the specified directory. Please note that most, if not all of the returned data from files is taken from the file's accompanying text file when it was added to the archive, so any data that appears to be in error could be coming from a non-standard TXT.
 */
export async function getContents(opts: GetContentsOpts): Promise<APIError|APIWarning|APIGetContentsSuccess> {

    try {
        const data = await useApi('getcontents', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}