import React from "react"
import Button from "@theme/Button"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <Section fullWidth center>
      <div className={styles.titles}>
        <Section.Title level={1} size="small">
          Hi, I'm Dee
        </Section.Title>

        <Section.Subtitle className={styles.subheader} center>
          I facilitate connections to scale your GameFi or Web3 brand
        </Section.Subtitle>

        <div>
          <Button to="#go" newTab={false}>
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  )
}
