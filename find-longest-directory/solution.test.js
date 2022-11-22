const {findLongestDirectory} = require('./solution')

describe('findLongestDirectory', () => {
	it('should return the longest directory from a string', () => {
		const directory = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

		expect(findLongestDirectory(directory)).toBe('dir/subdir2/subsubdir2/file2.ext')
	})
})
