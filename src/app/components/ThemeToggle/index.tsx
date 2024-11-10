"use client";
import { useState, useCallback, FC } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Theme } from "@/app/types";

type Props = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeToggle: FC<Props> = ({ theme, setTheme }) => {
  const [isDarkMode, setDarkMode] = useState(theme === "dark");

  const toggleDarkMode = useCallback((checked: boolean) => {
    setDarkMode(checked);
    const theme = checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=" + 365 * 24 * 60 * 60 + "; Secure; SameSite=Strict`;
    setTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={20} />
  );
};

export default ThemeToggle;
