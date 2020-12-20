import React from "react";
import styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>search for your movie</p>
    </div>
  );
};

export default Footer;
