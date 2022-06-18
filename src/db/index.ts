import pgPromise, { IMain } from 'pg-promise' // pg-promise core library
import dotenv from 'dotenv'
dotenv.config()

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env

const dbConfig = {
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
}

const pgp: IMain = pgPromise()

const db = pgp(dbConfig)

export { db, pgp }
