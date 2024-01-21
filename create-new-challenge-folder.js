import * as fs from 'node:fs/promises'
import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

try {
	const folderName = await rl.question('What is the task name? (used to name the folder):')

	await fs.mkdir(folderName);
	await fs.appendFile(`${folderName}/challenge.txt`, '')
	await fs.appendFile(`${folderName}/solution.js`, '')
	await fs.appendFile(`${folderName}/solution.test.js`, '')
} catch (error) {
	console.info(error.message)
}

rl.close();