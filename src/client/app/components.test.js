import  Operation  from './increment.js';
import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import counter from './inreducer.js';
import { Provider } from 'react-redux';

describe('COMPONENT', ()=> {
    describe(<Operation />, () => {
        it('Render', () => {
            var tree = renderer.create(<Provider store = {createStore(counter)}><Operation/></Provider>).toJSON();
            expect(tree).toMatchSnapshot();
        })
    })
})