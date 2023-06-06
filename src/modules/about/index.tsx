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
        height={300}
        src="/img/others/dee.jpg"
        width={480}
      />

      <div className={styles.text}>
        <Section.Title size="small">About me</Section.Title>
        <Section.Subtitle>
          If you don't know me already, my name is Dee. I provide access to
          exlusive deals and connect with top-tier talent, experts, agencies
          that scale GameFi brands to 7-8 figures. <br /> <br />
        </Section.Subtitle>
        <h3>My life map:</h3>
        <ul className={styles.list}>
          <li className={styles.bullet}>6+ years in Web3</li>
          <li className={styles.bullet}>
            Worked @ Myria, Chainlink, OMG Network
          </li>
          <li className={styles.bullet}>Code apps in my spare time</li>
          <li className={styles.bullet}>
            A member of Blockchain Game Alliance
          </li>
        </ul>
      </div>
    </div>
  </div>
)
