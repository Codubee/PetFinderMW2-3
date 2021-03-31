import React from 'react'
import Explanation from '../components/Explanation.js'

import {render, screen} from '@testing-library/react'

test('Explanation has rendered correctly', ()=>{
    render(<Explanation />)
    const explanationHeader = screen.getByText('Pet Finder')
    expect(explanationHeader).toBeInTheDocument()
})