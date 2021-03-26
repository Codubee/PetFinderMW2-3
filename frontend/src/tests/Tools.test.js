import React from 'react'
import { render, screen } from '@testing-library/react'
import Tools from '../components/Tool/Tools'

test('renders Title of component correctly', () => {
    render(<Tools />);

    const Title = screen.getByText('Tools Used:')

    expect(Title).toBeInTheDocument();
});

test('renders card titles correctly', () => {
    render(<Tools />);

    const CardTitle1 = screen.getByText('React')
    const CardTitle2 = screen.getByText('NodeJS')
    const CardTitle3 = screen.getByText('Jira')
    const CardTitle4 = screen.getByText('Postman')
    const CardTitle5 = screen.getByText('AWS')
    const CardTitle6 = screen.getByText('Heroku')

    expect(CardTitle1).toBeInTheDocument();
    expect(CardTitle2).toBeInTheDocument();
    expect(CardTitle3).toBeInTheDocument();
    expect(CardTitle4).toBeInTheDocument();
    expect(CardTitle5).toBeInTheDocument();
    expect(CardTitle6).toBeInTheDocument();
});
