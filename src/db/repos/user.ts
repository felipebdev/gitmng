import { callChalkBox } from '../../utils/cliFormatter.js'
import { db } from '../index.js'
import { User } from '../../types/interfaces/user.js'
import { users as sql } from '../sql/index.js'
import { ALREADY_EXISTS } from './errorCodes.const.js'

export async function createTable() {
  try {
    await db.none(sql.create)
    return db.$pool.end() //has to end in order to cli process automatically end as well
  } catch (error) {
    console.log('Unknown error occured at setup: ', error)
    return db.$pool.end() //has to end in order to cli process automatically end as well
  }
}

export async function add(values: any, user?: User) {
  try {
    const added = await db.one(sql.add, values)
    db.$pool.end() //has to end in order to cli process automatically end as well
    return added
  } catch (error) {
    switch (error.code) {
      case ALREADY_EXISTS:
        callChalkBox(
          'This user already exists in your database. Not saving it!'
        )
        db.$pool.end()
        return user
      default:
        console.log('Unknown error: ', error)
        break
    }
    return db.$pool.end() //has to end in order to cli 'process automatically end as well
  }
}

export async function list(filters?: any) {
  try {

    let filter: string = Object.keys(filters).length ? 'WHERE ' : ''

    if (filters.location)
      filter += `lower(location) like '%${String(
        filters.location
      ).toLowerCase()}%' `

    if (filters.language)
      filter += `${filters.location ? 'AND' : ''} 
            '${String(
              filters.language
            ).toLowerCase()}'=ANY(lower(languages::text)::text[])`

    const query = await db.any(
      `SELECT id, login, location, 
      html_url as url, email, name, languages, created_at FROM users ${filter}`
    )
    db.$pool.end() //has to end in order to cli 'process automatically end as well
    return query
  } catch (error) {
    db.$pool.end() //has to end in order to cli 'process automatically end as well
    throw error
  }
}
