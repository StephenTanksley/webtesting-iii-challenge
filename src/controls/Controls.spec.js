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
        //we render the Controls component and turn that into our snapshot.
        const wrapper = rtl.render(<Controls />)
        expect(wrapper.asFragment()).toMatchSnapshot();
    })

    it('should have buttons rendering', () => {
        const wrapper = rtl.render(<Controls />)
        //role in this case is targeting the element tag.
        const buttons = wrapper.getAllByRole('button')
        //we can tell that the buttons are rendering if we get two of them back.
        expect(buttons).toHaveLength(2)

        //I want to see the component rendered.
        wrapper.debug()
    })
})