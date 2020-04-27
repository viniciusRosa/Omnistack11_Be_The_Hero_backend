const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate a unique id', () => {
    it('should generate a unique id', () => {
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})