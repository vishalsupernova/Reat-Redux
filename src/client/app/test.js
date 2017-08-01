import * as actions from './actions.js';

describe('ACTIONS', () => {
    it('INC Action', () => {
        const payload = 5
        const expectedAction = {
            type: "INCREMENT",
            payload
        }
        expect(actions.inc(payload)).toEqual(expectedAction)
    });

    it('DEC Action', () => {
        const payload = 5
        const expectedAction = {
            type: 'DECREMENT',
            payload
        }
        expect(actions.dec(payload)).toEqual(expectedAction)
    });

    it('CHANGE Action', () => {
        const payload = 5
        const expectedAction = {
            type: 'CHANGE',
            payload
        }
        expect(actions.change(payload)).toEqual(expectedAction)
    });

    it('Reduce Action', () => {
        const payload = 5
        const expectedAction = {
            type: 'REDUCE',
            payload
        }
        expect(actions.reduce(payload)).toEqual(expectedAction)
    })
})