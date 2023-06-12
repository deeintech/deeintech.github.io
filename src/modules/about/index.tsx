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
          exlusive deals and connect with top-tier talent, experts, agencies
          that scale GameFi and Web3 brands to 7-8 figures. <br /> <br />
        </Section.Subtitle>
        <h3>My life map:</h3>
        <ul className={styles.list}>
          <li className={styles.bullet}>6+ years in Web3</li>
          <li className={styles.bullet}>
            Worked @ Chainlink, OMG Network, Myria
          </li>
          <li className={styles.bullet}>Code apps in my spare time</li>
          <li className={styles.bullet}>
            A member of Blockchain Game Alliance, ARC Community
          </li>
        </ul>
      </div>
    </div>
  </div>
)
