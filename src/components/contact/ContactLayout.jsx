"use client";

import styles from "./ContactLayout.module.css";

import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

import { motion } from "framer-motion";


export default function ContactLayout() {
  return (
    <section className={styles.contactSection}>
      {/* BACKGROUND GLOW */}
      <div className={styles.bgGlow}></div>

      {/* HERO */}
      <div className={styles.heroSection}>
        {/* ASTRONAUT */}
        <motion.div
          className={styles.astronaut}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/contact/astronaut.png"
            alt="Astronaut"
            width={700}
            height={900}
            priority
          />
        </motion.div>

        {/* EARTH */}
        <motion.div
          className={styles.earth}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/contact/earth.png"
            alt="Earth"
            width={900}
            height={900}
            priority
          />
        </motion.div>

        {/* HEADING */}
        <div className={styles.headingBox}>
          <p className={styles.smallTitle}>CONTACT US</p>

          <h1 className={styles.mainTitle}>LET’S CONNECT</h1>

          <p className={styles.subTitle}>
            SEND US A MESSAGE. WE WILL REACH YOU.
          </p>
        </div>

        {/* SIGNAL */}
        <div className={styles.signalWrapper}>
          <Image
            src="/images/contact/signal.png"
            alt="Signal"
            width={2400}
            height={400}
            className={styles.signalImage}
          />

          <div className={styles.transmitBeam}></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.contentGrid}>
        {/* LEFT INFO */}
        <div className={styles.infoSection}>
          <h3>CONTACT INFO</h3>

          <div className={styles.infoItem}>
            <Mail size={20} />
            <span>hello@spacefest.in</span>
          </div>

          <div className={styles.infoItem}>
            <Phone size={20} />
            <span>+91 98765 43210</span>
          </div>

          <div className={styles.infoItem}>
            <MapPin size={20} />
            <span>IIT Kharagpur, India</span>
          </div>
        </div>

        {/* FORM */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>TRANSMIT MESSAGE</h2>

          <div className={styles.formRow}>
            <div className={styles.inputBox}>
              <User size={18} />
              <input type="text" placeholder="Your Name" />
            </div>

            <div className={styles.inputBox}>
              <Mail size={18} />
              <input type="email" placeholder="Your Email" />
            </div>
          </div>

          <div className={styles.inputBox}>
            <Phone size={18} />
            <input type="text" placeholder="Your Phone (Optional)" />
          </div>

          <div className={styles.textAreaBox}>
            <MessageCircle size={18} />
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button className={styles.sendBtn}onClick={()=>{
            window.location.href = window.location.pathname;
          }}>
            <Send size={18} />
            SEND MESSAGE
          </button>
        </motion.div>

        {/* SOCIALS */}
        <div className={styles.socialSection}>
          <h3>FOLLOW US</h3>

          <div className={styles.socialIcons}>
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER QUOTE */}
      <p className={styles.quote}>
        “ THE UNIVERSE IS BIG💫 OUR CONNECTIONS MAKE IT SMALLER. ”
      </p>
    </section>
  );
}