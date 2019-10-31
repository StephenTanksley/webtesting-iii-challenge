// Test away!

//import test things
import React from 'react'
import * as rtl from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

//import component to be tested.
import Display from './Display'

//this is to keep things nice and clean and flush out the DOM after tests.
afterEach(rtl.cleanup);


//testing to make sure the Display shows up.
describe('<Display />', () => {
    it('should match snapshot', () => {
        //ready to test!
        const wrapper = rtl.render(<Display />)
        //we expecting the dashboard to match the saved snapshot.
        expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it('should initialize as unlocked', () => {
        const wrapper = rtl.render(<Display />);
        const unlocked = wrapper.queryByText(/unlocked/i)
        expect(unlocked).toBeVisible();

        //I want to see the component rendered.
        wrapper.debug()
    })
})