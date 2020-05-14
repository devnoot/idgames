/**
 * @description This package provides a wrapper around the idGames Archive Public
 * API documented at https://www.doomworld.com/idgames/api/
 * @author devnoot <devnoot@gmail.com>
 * @license MIT
 */

import { ping } from './commands/ping'
import { dbPing } from './commands/dbping'
import { about } from './commands/about'
import { get } from './commands/get'
import { getParentDir } from './commands/getParentDir'
import { getDirs } from './commands/getDirs'
import { getFiles } from './commands/getFiles'
import { getContents } from './commands/getContents'
import { latestVotes } from './commands/latestVotes'
import { latestFiles } from './commands/latestFiles'
import { search } from './commands/search'

interface APIResponse {
  /** Meta info about the response. */
  meta: {
    /** The version of the response */
    version: number | string
  }
}

export interface APIError extends APIResponse {
  /** The type of error */
  type: string
  /** An error message */
  message: string
}

export interface APIWarning extends APIResponse {
  /** The type of warning */
  type: string
  /** An error message */
  message: string
}

export interface APISuccess extends APIResponse {
  /** The requested data */
  content: object
}

export interface APIFileBase {
  /** The file's id. */
  id: string
  /** The title of the file. */
  title: string
  /** The file's author/uploader. */
  author: string
  /** The file's description. */
  description: string
  /** The file's average rating, as rated by users. */
  rating: string 
}

export interface APIFile extends APIFileBase {
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
  /** The author's E-mail address. */
  email: string
  /** The number of votes that this file received. */
  votes: string
  /** The URL for the idGames Archive page for this file. */
  url: string
  /** The idgames protocol URL for this file. */
  idgamesurl: string
}

export interface APIDir {
  /** The directory id. */
  id: string
  /** The directory name (in full). Takes precedence over id. */
  name: string
}

export interface APIReview {
  /** The individual review's text, if any. Note: may be blank. */
  text: string
  /** The vote associated with the review. */
  vote: string
  /** The user name associated with the review, if any. Note: may be blank/null, which means "Anonymous". Since Version 3 */
  username: string
}

export interface APIVote {
  /** Id of the vote. */
  id: string
  /** Id of the file voted on. */
  file: string
  /** The title of the file voted on. */
  title: string
  /** The file's average vote. */
  rating: string
  /** The text of the review, if any. */
  text: string
}

const IdGamesArchiveAPI = {
  about,
  dbPing,
  get,
  getContents,
  getDirs,
  getFiles,
  getParentDir,
  latestFiles,
  latestVotes,
  ping,
  search,
}

export {IdGamesArchiveAPI}
