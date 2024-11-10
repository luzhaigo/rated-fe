"use client";
import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useThemeProvider } from "@/app/providers/ThemeProvider";
import logoDark from "./logo_dark.png";
import logoLight from "./logo_light.png";
import styles from "./index.module.css";

const Navbar = () => {
  const { theme, setTheme } = useThemeProvider();

  return (
    <nav className={styles.navbar}>
      <Image
        src={theme === "dark" ? logoDark : logoLight}
        alt="Rated Logo"
        width={78}
        height={26}
      />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </nav>
  );
};

export default Navbar;
