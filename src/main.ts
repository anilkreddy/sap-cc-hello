import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const inputString : string = core.getInput('name')
    
    core.info(inputString)

    await wait(1400)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()