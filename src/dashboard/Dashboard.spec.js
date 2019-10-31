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
        //we target the component we want to snapshot here.
        const wrapper = rtl.render(<Dashboard />);
        //we set up the snapshot here. Test should match our snapshot.
        expect(wrapper.asFragment()).toMatchSnapshot();
    });

    
    //Triggering an event, therefore this needs to be async
    //we can only write one test here because the function is a toggle. If it works once, it will work again.
    it('should close the door', async () => {
        const wrapper = rtl.render(<Dashboard />)
        await wrapper.findByText(/open/i)

        //this is allowing us to target an event by text and then to fire an event.
        const close = wrapper.getByText(/close/i)
        
        //we want the test runner to fire an event by targeting the element that we've assigned to a variable and clicking on it.
        rtl.act(() => {
            rtl.fireEvent.click(close)
        })

        //we're expecting that the element we've targeted will not display the text 'open' because we're triggering it to close.
        expect(wrapper.getByText(/close/i)).not.toBe(/open/i)
    })

    

    //Triggering an event, therefore this needs to be async
    //we can only write one test here because the function is a toggle. If it works once, it will work again.
    it('should lock the door', async () => {
        const wrapper = rtl.render(<Dashboard />)
        await wrapper.findByText(/unlocked/i)

        //this allows us to target an event by text and then to fire an event.
        const lock = wrapper.queryByText(/lock gate/i)

        //we want the test runner to fire an event by targeting the element that we've assigned to a variable and clicking on it.
        rtl.act(() => {
            rtl.fireEvent.click(lock)
        })

        //we're expecting that the element we've targeted will not display the text 'unlock' because we're triggering it to lock.
        expect(wrapper.queryByText(/unlock/i)).not.toBe(/locked/i)

        //I just want to see what's being rendered.
        wrapper.debug()
    })
 
});