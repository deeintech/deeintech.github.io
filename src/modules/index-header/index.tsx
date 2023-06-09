import React from "react"
import Button from "@theme/Button"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <Section fullWidth center>
      <div className={styles.titles}>
        <Section.Title level={1} className={styles.header}>
          Dee in Tech
        </Section.Title>

        <Section.Subtitle className={styles.subheader} center>
          Facilitating connections and deals to scale your GameFi project
        </Section.Subtitle>

        <div>
          <Button to="#go" newTab={false}>
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  )
}
