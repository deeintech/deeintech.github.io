import React from "react"
import customFields from "../../config/customFields"
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.border}>
        <div className={styles.bottom}>{customFields.copyright}</div>
      </div>
    </footer>
  )
}

export default Footer
