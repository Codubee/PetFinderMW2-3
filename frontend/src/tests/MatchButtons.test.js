import MatchPage from '../views/MatchPage.js'

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";




test("Button is rendered correctly", () => {
    render(<MatchPage />);
    fireEvent.click(screen.getByTitle("Yes"))
    fireEvent.click(screen.getByTitle("No"))  

    const yesButton = screen.getByTitle("Yes")
    const noButton = screen.getByTitle("No")

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
});