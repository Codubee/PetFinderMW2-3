import React from 'react'

import {fireEvent, render, screen} from '@testing-library/react'

import Navbar from '../components/Navbar'

test('Navbar is rendered correctly', ()=>{
    render(<Navbar />);
    const navlinkHomeText = screen.getByText('Home')
    const navlinkMatchText = screen.getByText('Match')
    
    expect(navlinkHomeText).toBeInTheDocument()
    expect(navlinkMatchText).toBeInTheDocument()
})
