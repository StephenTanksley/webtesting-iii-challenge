// Test away!

//import test things
import React from 'react'
import * as rtl from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

//import component to be tested.

import Controls from './Controls'

//this is to keep things nice and clean and flush out the DOM after tests.
afterEach(rtl.cleanup);

// write tests

//testing to make sure the Controls component shows up.
describe('<Controls />', () => {
    it('should match snapshot', () => {

        const wrapper = rtl.render(<Controls />)

         //we're using the debug function to visualize the element tree in the terminal.
         wrapper.debug()

         //we expecting the dashboard to match the saved snapshot.
        expect(wrapper.asFragment()).toMatchSnapshot();

    })
})