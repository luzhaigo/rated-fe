"use client";
import Image from "next/image";
import { useThemeProvider } from "@/app/providers/ThemeProvider";
import footerDark from "./footer_dark.png";
import footerLight from "./footer_light.png";
import styles from "./index.module.css";

const Footer = () => {
  const { theme } = useThemeProvider();
  return (
    <footer className={styles.footer}>
      <Image
        src={theme === "dark" ? footerDark : footerLight}
        alt="Rated Logo"
        width={128}
        height={50}
      />
    </footer>
  );
};

export default Footer;
