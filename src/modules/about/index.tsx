import React from "react"
import styles from "./styles.module.css"
import shCss from "../../css/index/showcase.module.css"
import { Section } from "../../components/Section"

export const About = () => (
  <div className={styles.root}>
    <div className={shCss.showcase__inner}>
      <img
        alt="Dee"
        className={styles.illustration}
        src="/img/others/dee.png"
        width={360}
      />

      <div className={styles.text}>
        <Section.Title size="small">About me</Section.Title>
        <Section.Subtitle>
          If you don't know me already, my name is Dee. I provide access to
          top-tier experts, agencies, studios, and networks to help scale your
          GameFi or Web3 brand. <br /> <br />
        </Section.Subtitle>
        <h3>My life map:</h3>
        <ul className={styles.list}>
          <li className={styles.bullet}>6+ years in Web3</li>
          <li className={styles.bullet}>Prev: Chainlink, OMG Network</li>
          <li className={styles.bullet}>Code apps in my spare time</li>
          <li className={styles.bullet}>
            A member of ARC Community, BGA, Dark Labs, TTOO
          </li>
        </ul>
      </div>
    </div>
  </div>
)
