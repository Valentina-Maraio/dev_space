import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/pages/HomePage";
import Menu from "@/components/Menu";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage/>
      <Menu/>
    </div>
  );
}
