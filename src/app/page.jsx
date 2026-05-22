"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

export default function HomePage() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".title-line", {
      y: 120,
      opacity: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power4.out",
    });

    tl.from(
      ".tagline",
      {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.from(
      ".signalLine",
      {
        scaleX: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=1"
    );

    gsap.to(".backgroundImage", {
      y: -40,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <main className={styles.hero} ref={heroRef}>
      
      <div className={`${styles.backgroundImage} backgroundImage`} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        
        <div className={styles.leftVisual}>
        </div>

        <div className={styles.textBlock}>
          
          <h1 className={styles.title}>
            <span className="title-line">QUANTUM</span>
            <span className="title-line">TRANSMISSION</span>
          </h1>

          <div className={`${styles.signalLine} signalLine`} />

          <p className={`${styles.tagline} tagline`}>
            Beyond the Binary.
            <br />
            Into the Unknown.
          </p>

        </div>

      </div>
    </main>
  );
}
