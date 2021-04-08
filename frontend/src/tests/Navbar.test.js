import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Navbar from "../components/Navbar";
import App from "../App";

test("Navbar is rendered correctly", () => {
  render(<App />);
  const navlinkHomeText = screen.getByText("Home");
  const navlinkMatchText = screen.getByText("Match");

  expect(navlinkHomeText).toBeInTheDocument();
  expect(navlinkMatchText).toBeInTheDocument();
});

test("Navbar navigates to appropriate views", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Home"));
  const element1 = screen.getByText("OUR TEAM");
  expect(element1).toBeInTheDocument();

  fireEvent.click(screen.getByText("Match"));
  const element2 = screen.getByText("Match Page Component");
  expect(element2).toBeInTheDocument();
});
