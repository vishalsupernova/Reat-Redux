export const inc = (value) => {
    return{
        type: 'INCREMENT',
        payload: value
    }
}

export const dec = (value) => {
    return{
        type: 'DECREMENT',
        payload: value
    }
}

export const change = (value) => {
    return{
        type: 'CHANGE',
        payload: value
    }
}

export const reduce = (value) => {
    return{
        type: 'REDUCE',
        payload: value
    }
}
