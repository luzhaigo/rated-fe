import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeProvider from "@/app/providers/ThemeProvider";
import Navbar from ".";

test("Should render Navbar with the Logo and the ThemeToggle.", () => {
  const alt = "Rated Logo";
  render(
    <ThemeProvider theme="dark">
      <Navbar />
    </ThemeProvider>
  );

  const img = screen.getByAltText(alt) as HTMLImageElement;

  expect(img).toBeInTheDocument();
});
