import React from "react"
import styles from "./styles.module.css"
import { Section } from "../../components/Section"

const servicesList = [
  {
    title: "Marketing & BD",
    uses: [
      "Incubation of Web2 IPs into Web3",
      "Market research",
      "USP, ICP, target audience analysis",
      "GTM and content strategies",
      "Community building",
      "Copywriting & lore creation",
      "Influencer marketing",
      "Collabs & partnerships",
      "NFT mint campaigns",
      "Localization and expansion strategy to Asian markets (China, Yapan, Korea)",
    ],
  },
  {
    title: "Development",
    uses: [
      "Mint contracts & dapps creation",
      "Contract migration",
      "Contract audits",
      "UI/UX design",
      "Full-stack applications",
    ],
  },
  {
    title: "Advisory",
    uses: [
      "Assistance with fundraising (VCs, angels, etc.)",
      "Optimization of pitch & financial materials",
      "Cross-border legal strategy",
      "Banking services & regulatory compliance",
      "Company formation or exit",
      "Listing on CEXs",
    ],
  },
]

export const Services = () => (
  <div>
    <Section>
      <Section.Subtitle center>
        My network covers most Web3 services. <br />
        If you have a specific request, I can arrange it for you!
      </Section.Subtitle>
    </Section>
    <div className={styles.root}>
      {servicesList.map(({ title, uses }, index) => (
        <div className={styles.card} key={index}>
          <h2>{title}</h2>

          <ul className={styles.list}>
            {uses.map((use, index) => (
              <li key={index} className={styles.listItem}>
                {use}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)