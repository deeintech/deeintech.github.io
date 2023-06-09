import React from "react"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"
import clsx from "clsx"

const featureList = [
  "Time freedom to focus on the product",
  "High credibility and status in Web3",
  "World-class execution service",
  "Genuine long-lasting community",
  "Partnerships with prominent IPs",
  "Secured venture funding",
]

export const Results = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.textColumn}>
          <Section.Title size="small">Results</Section.Title>

          <Section.Subtitle>
            The clients we work with achieve the following results:
          </Section.Subtitle>

          <ul className={styles.list}>
            {featureList.map((feature) => (
              <li className={styles.bullet} key={feature}>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Section noGap center>
          <div className={styles.startBuildingRoot}>
            <img
              src="/img/others/arcadia.png"
              width={600}
              height={240}
              alt="Arcadia results"
              className={clsx(
                styles.startBuildingImage,
                styles.instanceDetailsImage,
              )}
            />
          </div>
        </Section>
      </div>
    </Section>
  )
}
