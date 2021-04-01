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
  const element = screen.getByText("Landing Page Component");
  expect(element).toBeInTheDocument();
});
