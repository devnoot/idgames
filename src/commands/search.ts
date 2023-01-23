import useApi from '../useApi'
import { APIFile, APISuccess, APIError, APIWarning } from '../index'

type SearchType = 'filename' | 'title' | 'author' | 'email' | 'description' | 'credits' | 'editors' | 'textfile'
type SortType = 'date' | 'filename' | 'size' | 'rating'
type SortDirType = 'asc' | 'desc'

export interface SearchOpts {
    /** The query string to use. Must be at least 3 characters long. */
    query: string
    /** The type of search. If not specified, assumes filename. */
    type?: SearchType
    /** The type of sorting. If not specified, assumes date.  */
    sort?: SortType
    /** The sorting direction. If not specified, assumes asc.  */
    dir?: SortDirType
}

export interface APISearchSuccess extends APISuccess {
    content: {
        file?: APIFile|APIFile[]
    }
}

/**
 * Searches through the database for files matching a query string. There is a limit to how much is returned. Please note that most, if not all of the returned data is taken from the file's accompanying text file when it was added to the archive, so any data that appears to be in error could be coming from a non-standard TXT.
 */
export async function search(opts: SearchOpts): Promise<APIError|APIWarning|APISearchSuccess> {

    try {
        const data = await useApi({ action: 'search', ...opts })
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}