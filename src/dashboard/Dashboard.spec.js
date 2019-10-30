// Test away!

import React from 'react'
import * as rtl from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import Dashboard from './Dashboard'


afterEach(rtl.cleanup);

//testing to make sure the dashboard shows up.
describe('<Dashboard />', () => {
    //we describe the test we're implementing.
    it('should match snapshot', () => {

        //we target the component we want to test here.
        const wrapper = rtl.render(<Dashboard />)

        //we're using the debug function to visualize the element tree in the terminal.
        wrapper.debug()

        //we expecting the dashboard to match the saved snapshot.
        expect(wrapper.asFragment()).toMatchSnapshot();


    });
});