#!/usr/bin/env ts-node-script
import { Command } from 'commander'
import dotenv from 'dotenv'
import {
  fetchAndSave,
  listUsers,
  createUsersTable,
} from './src/business-logic/user.js'
import { callChalkBox } from './src/utils/cliFormatter.js'

dotenv.config()

const program = new Command()

const run = (): void => {
  program
    .version('1.0.0')
    .name('gitmng')
    .description('CLI to save GitHub profiles')

  program
    .command('setup')
    .description(
      'Makes setup for gitmng usage, creating user table in gitmng postgres database.'
    )
    .action(async function () {
      console.log('Making setup...')
      await createUsersTable()
      callChalkBox('Setup was made succesfully')
    })

  program
    .command('fetch [user]')
    .description('Fetch a GitHub user and store it')
    .action(async function (user: string) {
      console.log('Fetching...')
      const savedUser = await fetchAndSave(user)
      console.info(savedUser)
    })

  program
    .command('list')
    .description('Returns stored GitHub users.')
    .option('-l, --location <location>', 'Filter users by location.')
    .option('-ln, --language <language>', 'Filter users by languages.')
    .action(async function (options) {
      console.log('Fetching...')
      const users = await listUsers(options)
      console.table(users)
    })

  program.parse(process.argv)
}

try {
  run()
} catch (error) {
  console.error('Unknown error: ', error)
  process.exit(1)
}
