import { expect } from 'chai'
import { concatArray } from '../../src/utils'

describe('Concat array test', () => {
    it('works with falsy', () => {
        const result = concatArray(undefined, null, '', 0, null, [])
        expect(result).to.deep.equal(['', 0])
    })
    it('works with non-arrays', () => {
        const result = concatArray([], undefined, null, 1, ['22'], [33], {})
        expect(result).to.deep.equal([1, '22', 33, {}])
    })
    it('works with nested arrays', () => {
        const result = concatArray([[1], [[2]]], [[3]])
        expect(result).to.deep.equal([[1], [[2]], [3]])
    })
})
