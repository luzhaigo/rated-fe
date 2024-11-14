"use client";
import {
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  useContext,
} from "react";
import { Theme } from "@/app/types";

const Context = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
} | null>(null);

type Props = { theme: Theme };

const ThemeProvider = ({
  theme: themeFromProps,
  children,
}: PropsWithChildren<Props>) => {
  const [theme, setTheme] = useState(themeFromProps);
  const value = useMemo(() => {
    return {
      theme,
      setTheme: (theme: Theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        document.cookie = `theme=${theme}; path=/; max-age=" + 365 * 24 * 60 * 60 + "; Secure; SameSite=Strict`;
        setTheme(theme);
      },
      toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
    };
  }, [theme]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ThemeProvider;

export const useThemeProvider = () => {
  return useContext(Context)!;
};
