"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TeamOrbit.module.css";
import MemberCard from "./MemberCard";

export default function TeamOrbit({ team }) {
  const [current, setCurrent] = useState(0);

  const members = team.members;

  const prevIndex =
    (current - 1 + members.length) % members.length;

  const nextIndex =
    (current + 1) % members.length;

  const handlePrev = () => {
    setCurrent(prevIndex);
  };

  const handleNext = () => {
    setCurrent(nextIndex);
  };

  return (
    <section className={styles.wrapper}>
      
      <Link href="/teams" className={styles.backButton}>
        ← Back to Teams
      </Link>

      <div className={styles.header}>
        <h1>{team.title}</h1>

        <div className={styles.line}></div>

        <p>{team.description}</p>
      </div>

      <div className={styles.orbitContainer}>

        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={handlePrev}
        >
          ‹
        </button>

        <div className={styles.sideLeft}>
          <MemberCard
            member={members[prevIndex]}
            position="side"
          />
        </div>

        <div className={styles.center}>
          <MemberCard
            member={members[current]}
            position="active"
          />
        </div>

        <div className={styles.sideRight}>
          <MemberCard
            member={members[nextIndex]}
            position="side"
          />
        </div>

        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={handleNext}
        >
          ›
        </button>

      </div>

      <div className={styles.memberInfo}>
        <h2>{members[current].name}</h2>
        <span>{members[current].role}</span>
      </div>

      <div className={styles.dots}>
        {members.map((_, index) => (
          <button
            key={index}
            className={
              index === current
                ? styles.activeDot
                : styles.dot
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  );
}