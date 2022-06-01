import { makeRequest } from '../utils/axios.js'
import { createTable, add, list } from '../db/repos/user.js'
import { GitHubUser } from '../types/interfaces/user.js'
import {
  adjustGitHubUserResponse,
  objectToArrayValues,
} from '../utils/adjustResponse.js'
import { GITHUB_API_BASE_URL } from '../types/constants/index.js'

const fetchAndSave = async (user: string): Promise<any> => {
  const data = adjustGitHubUserResponse(
    (await gitHubFetchUser(user)) as GitHubUser
  )

  data.languages = Array.from(await gitHubFetchLanguages(data.repos_url))

  const userValuesArr = objectToArrayValues(data)

  const savedUser = await add(userValuesArr, data)

  return savedUser
}

const listUsers = (options?: any) => {
  return list(options)
}

const createUsersTable = async () => {
  return createTable()
}

export { fetchAndSave, listUsers, createUsersTable }

//private helpers
const gitHubFetchUser = async (user: string): Promise<GitHubUser> => {
  const gitUrl = `${GITHUB_API_BASE_URL}/users/${user}`
  const { data } = await makeRequest({
    url: gitUrl,
    method: 'GET',
  })
  return data
}

const gitHubFetchLanguages = async (reposUrl: string): Promise<Set<string>> => {
  const { data } = await makeRequest({
    url: reposUrl,
    method: 'GET',
  })

  return new Set(
    data
      .map((l: any) => l.language)
      .filter((v: any) => ![null, undefined, ''].includes(v))
  )
}
