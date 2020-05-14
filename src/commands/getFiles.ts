import useApi from '../useApi'
import { APISuccess, APIError, APIWarning, APIFile } from '../index'

interface BaseGetFileOpts {
    /** The directory id. If not present, must use name. */
    id?: string
    /** The directory name (in full). If not present, must use id. */
    name?: string
}

interface IdGetFileOpts extends BaseGetFileOpts {
    /** The directory id. */
    id: string
}

interface NameGetFilesOpts extends BaseGetFileOpts {
    /** The directory name (in full). */
    name: string
}

type GetFileOpts = IdGetFileOpts | NameGetFilesOpts

interface APIGetFilesSuccess extends APISuccess {
    content: {
        file?: APIFile[]
    }
}

/**
 * Returns the files under the specified directory. Please note that most, if not all of the returned data is taken from the file's accompanying text file when it was added to the archive, so any data that appears to be in error could be coming from a non-standard TXT.
 */
export async function getFiles(opts: GetFileOpts): Promise<APIError|APIWarning|APIGetFilesSuccess> {

    try {
        const data = await useApi('getfiles', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}