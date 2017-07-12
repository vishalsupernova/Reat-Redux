function counter(state, action){

    if(typeof state === 'Undefined')
    return 0;

    if(action.type === 'Increment')
    return state +1;
    else if(action.typn === 'Decrement')
    return state -1;
    else{
        return state;
    }
}

expect(
    counter(0, {Increment})
).toEqual(1);

expect(
    counter(1, {Increment})
).toEqual(2);

expect(
    counter(2, {Decrement})
).toEqual(1);

expect(
    counter(2, {Decrement})
).toEqual(1);

expect(
    counter(undefined, {})
).toEqual (0);

console.log("Test Passed")