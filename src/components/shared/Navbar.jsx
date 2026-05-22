"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      <Link href="/" className={styles.logo}>
        SPACE FEST
      </Link>

      <div
        className={`${styles.links} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/guestLectures">Guest Lectures</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/profileLogin">Profile Login</Link>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}