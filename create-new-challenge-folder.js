const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Folder name: ', (folderName) => {
	try {
		if (fs.existsSync(folderName)) {
			throw new Error('Folder already exists.');
		}

		fs.mkdirSync(folderName);

		fs.appendFile(`${folderName}/challenge.md`, '', (err) => {
			if (err) {
				throw err;
			}
			console.log('challenge.md created.');
		});

		fs.appendFile(`${folderName}/solution.js`, '', (err) => {
			if (err) {
				throw err;
			}
			console.log('solution.js created.');
		});

		fs.appendFile(`${folderName}/solution.test.js`, '', (err) => {
			if (err) {
				throw err;
			}
			console.log('solution.test.js created.');
		});
	} catch (err) {
		console.error(err.message);
	}

	rl.close();
});
