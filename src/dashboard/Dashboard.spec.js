// Test away!

import React from 'react'
import renderer from 'react-test-renderer'
import * as rtl from '@testing-library/react'

import "@testing-library/jest-dom/extend-expect"

import Dashboard from './Dashboard'


afterEach(rtl.cleanup);

//testing to make sure the dashboard shows up.
describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const wrapper = rtl.render(<Dashboard />)

        wrapper.debug()

        //we're expecting the dashboard to match the snapshot we created.
        expect(wrapper.asFragment()).toMatchSnapshot();


    });
});