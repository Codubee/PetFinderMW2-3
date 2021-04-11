import React from 'react'
import { render, screen } from '@testing-library/react'
import DisplayAnimalDescription from '../components/DisplayAnimalDescription'

test('renders description titles correctly', () => {
    render(<DisplayAnimalDescription />);

    const Description1 = screen.getByText('Animal name:')
    const Description2 = screen.getByText('Animal type:')
    const Description3 = screen.getByText('Animal sex:')
    const Description4 = screen.getByText('Shelter name:')
    const Url = screen.getByText('Adoption URL')

    expect(Description1).toBeInTheDocument();
    expect(Description2).toBeInTheDocument();
    expect(Description3).toBeInTheDocument();
    expect(Description4).toBeInTheDocument();
    expect(Url).toBeInTheDocument();

});
