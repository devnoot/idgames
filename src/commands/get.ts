import useApi from '../useApi'
import { APISuccess, APIError, APIReview } from '..'

interface GetOptsWithId {
    /** The file id. If not present, must use file. */
    id: string
    /** The file path. If not present, must use id. */
    file?: never
}

interface GetOptsWithFile {
    /** The file id. If not present, must use file. */
    id?: never
    /** The file path. If not present, must use id. */
    file: string
}

type GetOpts = GetOptsWithId | GetOptsWithFile

interface APIGetSuccess extends APISuccess {
    content: {
        /** The file's id. */
        id: string
        /** The title of the file. */
        title: string
        /** The file's full directory path. */
        dir: string
        /** The filename itself, no path. */
        filename: string
        /** The size of the file in bytes. */
        size: string
        /** The date that the file was added in seconds since the Unix Epoch (Jan. 1, 1970). Note: This is likely influenced by the time zone of the primary idGames Archive. */
        age: string
        /** A YYYY-MM-DD formatted date describing the date that this file was added to the archive. */
        date: string
        /** The file's author/uploader. */
        author: string
        /** The author's E-mail address. */
        email: string
        /** The file's description. */
        description: string
        /** The file's additional credits. */
        credits: string
        /** The file's base (from another mod? made from scratch?). */
        base: string
        /** The file's/WAD's build time. */
        buildtime: string
        /** The editors used to create this. */
        editors: string
        /** Known bugs (if any). */
        bugs: string
        /** The file's text file contents. */
        textfile: string
        /** The file's average rating, as rated by users. */
        rating: string
        /** The number of votes that this file received. */
        votes: string
        /** The URL for the idGames Archive page for this file. */
        url: string
        /** The idgames protocol URL for this file. */
        idgamesurl: string
        /** The element that contains all reviews for this file in review elements. */
        reviews: {
            review?: APIReview[]
        }
    }
}

/**
 * Sends back information about a file entry in idGames, including reviews and votes, but not who made them (unless they signed their reviews, obviously). Please note that most, if not all of the returned data is taken from the file's accompanying text file when it was added to the archive, so any data that appears to be in error could be coming from a non-standard TXT.
 */
export async function get(opts: GetOpts): Promise<APIGetSuccess|APIError> {

    try {
        const data = await useApi('get', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}