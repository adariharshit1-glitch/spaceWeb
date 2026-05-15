"use client";

import Link from "next/link";
import styles from "./TeamsGalaxy.module.css";

const teams = [
  { name: "tech", label: "tech", button: "Discover", pos: styles.tech },
  { name: "fqtq", label: "fqtq", button: "Review", pos: styles.fqtq },
  { name: "design", label: "design", button: "Inspect", pos: styles.design },
  { name: "management", label: "management", button: "Direct", pos: styles.management },
];

export default function TeamsGalaxy() {
  return (
    <section className={styles.galaxy}>
      
      <div className={styles.centerText}>
        <h1>Our Universe,<br /> Our People</h1>

        <p>
          Four Clusters, One mission.
          <br />
          Explore the teams driving Space Fest
        </p>
      </div>

      {teams.map((team) => (
        <div key={team.name} className={`${styles.cluster} ${team.pos}`}>
          <img
            src="/images/teams/torus.webp"
            alt={team.name}
            className={styles.ring}
          />

          <div className={styles.content}>
            <span>{team.label}</span>

            <Link href={`/teams/${team.name}`} className={styles.teamButton}>
              {team.button}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}