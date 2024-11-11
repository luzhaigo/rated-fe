import { expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import ThemeToggle from ".";

test("Should render ThemeToggle and update the value of theme.", async () => {
  const theme = "dark";
  const setTheme = vitest.fn();
  render(<ThemeToggle theme={theme} setTheme={setTheme} />);

  const toggle = screen.getByRole("button");

  expect(toggle).toBeInTheDocument();

  await user.click(toggle);

  expect(setTheme).toBeCalledWith("light");
});
