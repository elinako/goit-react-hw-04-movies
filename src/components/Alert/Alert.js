import React from "react";
import styles from "./AlertStyles.module.css";

const Alert = () => {
  return (
    <div className={styles.alertContainer}>
      <p>Please, input movie name</p>
    </div>
  );
};

export default Alert;
