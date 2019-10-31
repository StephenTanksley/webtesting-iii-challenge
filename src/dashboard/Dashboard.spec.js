// Test away!

import React from 'react'
import * as rtl from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import Dashboard from './Dashboard'
// import Display from '../display/Display'
// import Controls from '../controls/Controls'

//this is to keep things nice and clean and flush out the DOM after tests.
afterEach(rtl.cleanup);

//testing to make sure the dashboard shows up.
describe('<Dashboard />', () => {
    //we describe the test we're implementing.
    it('should match snapshot', () => {

        //we target the component we want to test here.
        const wrapper = rtl.render(<Dashboard />);

        // //we want to make sure the Unlock is rendering.
        // const unlock = wrapper.getByText(/unlock gate/i);
        // expect(unlock).toBeVisible()

        // //we want to make sure the Lock is rendering.
        const lock = wrapper.getByText(/lock gate/i);        
        expect(lock).toBeVisible()


        // //we want to make sure the Controls are rendering.
        // const controls = rtl.render(<Controls />);
        // expect(controls).toBeVisible()

        //we're using the debug function to visualize the element tree in the terminal.
        wrapper.debug()

        //we expecting the dashboard to match the saved snapshot.
        // expect(wrapper.asFragment()).toMatchSnapshot();

        

    });
});