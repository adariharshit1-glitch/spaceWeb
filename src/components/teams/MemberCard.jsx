import styles from "./MemberCard.module.css";

export default function MemberCard({ member, position }) {
  return (
    <div className={`${styles.card} ${
        position === "active"? styles.active: styles.side
      }`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.image}
        />
      </div>
    </div>
  );
}
