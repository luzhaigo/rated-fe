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
      setTheme: setTheme as (theme: Theme) => void,
      toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
    };
  }, [theme]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ThemeProvider;

export const useThemeProvider = () => {
  return useContext(Context)!;
};
