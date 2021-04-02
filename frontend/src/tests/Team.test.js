import React from 'react'
import {render, screen} from '@testing-library/react'
import Team from '../components/Team'

test('renders title to be correct', () => {
    render(<Team/>);

    const main_title = screen.getByText("OUR TEAM")

    expect(main_title).toBeInTheDocument();
});


test('renders card titles correctly' , () => {
    render(<Team/>);

    const Card1 = screen.getByText('Cristian Ruiz')
    const Card2 = screen.getByText('Brando Lugo')
    const Card3 = screen.getByText('Kristina Kepic')
    const Card4 = screen.getByText('Lesli Perez')
    const Card5 = screen.getByText('Oziel Salinas')

    expect(Card1).toBeInTheDocument();
    expect(Card2).toBeInTheDocument();
    expect(Card3).toBeInTheDocument();
    expect(Card4).toBeInTheDocument();
    expect(Card5).toBeInTheDocument();
});
