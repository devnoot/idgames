import useApi from '../useApi'
import { APIVote, APISuccess, APIError, APIWarning } from '../index'

interface LatestVotesOpts {
    /** The amount to return. If not specified, or is too large, assumes the maximum allowed. */
    limit?: number
}

interface APILatestVotesSuccess extends APISuccess {
    content: {
        vote?: APIVote[]
    }
}

/**
 * Returns the latest votes submitted, date descending.
 */
export async function latestVotes(opts: LatestVotesOpts | null): Promise<APIError|APIWarning|APILatestVotesSuccess> {

    try {
        const data = await useApi('latestvotes', opts)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}