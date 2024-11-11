import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeProvider from "@/app/providers/ThemeProvider";
import Footer from ".";

test("Should render Footer with Powered by Rated Badge.", () => {
  const alt = "Rated Logo";
  render(
    <ThemeProvider theme="dark">
      <Footer />
    </ThemeProvider>
  );

  const img = screen.getByAltText(alt) as HTMLImageElement;

  expect(img).toBeInTheDocument();
});
