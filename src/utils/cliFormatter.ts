import chalk from 'chalk'
import boxen from 'boxen'

export function callChalkBox(text: string): void {
  const greeting = chalk.white.bold(text)

  const msgBox = boxen(greeting, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555',
  })

  console.log(msgBox)
}
