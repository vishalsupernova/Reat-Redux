import counter from './inreducer.js'

describe('counter', () => {
    it('Initial Values', () => {
        expect(counter(undefined, {})).toEqual({
            count: 0,
            inc: 0,
            dec: 0
        })
    });

    it('INCREMENT', () => {
        expect(counter({
            count: 0,
            inc: 0,
            dec: 0
        }, {
            type: 'CHANGE_LOCATION',
            count: 1
        })).toEqual({
            count: 0,
            inc: 0,
            dec: 0
        })

        expect({
            count: 1,
            inc: 1,
            dec: 0
        }, {
            type: 'CHANGE_LOCATION',
            count: 3
        }).toEqual({
            count: 1,
            inc: 1,
            dec: 0
        })

    });

    it('CHANGE', () => {
        var count = 3;
        expect({
            count,
            inc: count,
            dec: 0
        }, {
            type: 'CHANGE',
            inc: count+2
        }).toEqual({
            count,
            inc: count,
            dec: 0
        })

        var count=3
        expect({
            count,
            inc: 5,
            dec: 0
        }, {
            type: 'CHANGE',
            inc: count+4
        }).toEqual({
            count,
            inc: 5,
            dec: 0
        })
    })
})