import { GitHubUser } from '../types/interfaces/user'
import { userKeys } from '../types/constants/index.js'
import { pick } from 'ramda'
import { LooseObject } from '../types/interfaces/user'
import { User } from '../types/interfaces/user.js'

export function objectToArrayValues(obj: LooseObject): Array<any> {
  const arrayValues: Array<any> = Object.keys(obj).map(function (key) {
    return obj[key]
  })

  return arrayValues
}

export function adjustGitHubUserResponse(user: GitHubUser): User {
  return pick(userKeys, user) as User
}
