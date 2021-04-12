import MatchPage from '../views/MatchPage.js'

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";




test("Button is rendered correctly", () => {
    render(<MatchPage />);
    fireEvent.click(screen.getByTitle("YES"))
    fireEvent.click(screen.getByTitle("NO"))  

    const yesButton = screen.getByTitle("YES")
    const noButton = screen.getByTitle("NO")

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
});