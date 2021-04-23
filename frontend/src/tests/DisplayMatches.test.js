import React from 'react'
import {render,screen} from '@testing-library/react'
import DisplayMatches from '../components/DisplayMatches.js'

test('table is displayed correctly', () => {

    render (<DisplayMatches />);
    const displayMatches = screen.getByText('Your Matches!');
    expect(displayMatches).toBeInTheDocument();
})