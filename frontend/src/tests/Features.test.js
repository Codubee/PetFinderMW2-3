import React from 'react';
import {render,screen} from '@testing-library/react';
import Features from '../components/Features';

test('features are displayed correctly', () => {

    render (<Features />);
    const value = screen.getByText('Features');
    expect(value).toBeInTheDocument();
})