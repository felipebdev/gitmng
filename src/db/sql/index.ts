import pkg from 'pg-promise'
import { join as joinPath, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const { QueryFile } = pkg

export const users = {
  create: sql('user/create.sql'),
  add: sql('user/add.sql'),
  list: sql('user/list.sql'),
}

function sql(file: string) {
  const fullPath: string = joinPath(__dirname, file)

  const options = {
    minify: true,
  }

  const qf = new QueryFile(fullPath, options)

  if (qf.error) {
    console.error(qf.error)
  }

  return qf
}
