import React from "react"
import clsx from "clsx"

import customFields from "../config/customFields"

import liCss from "../css/use-cases/list.module.css"
import ucCss from "../css/use-cases/use-case.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"

import Layout from "../theme/Layout"
import { Section } from "../components/Section"
import UseCaseCustomers from "../components/UseCaseCustomers"

import { GetStarted } from "../modules/get-started"
import { Header } from "../modules/index-header"
import { Services } from "../modules/services"
import { About } from "../modules/about"
import { Results } from "../modules/results"
import { customers } from "../assets/customers"

const List = ({
  items,
  itemClassName,
}: {
  items: string[]
  itemClassName: string
}) => (
  <ul className={clsx(liCss.list, ucCss.list)}>
    {items.map((text, index) => (
      <li key={index} className={itemClassName}>
        {text}
      </li>
    ))}
  </ul>
)

const PartnersData = () => (
  <section className={seCss.section} id="financial-market-data">
    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__industries"]}>
        <h4>Partner network overview</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Millions in funding secured",
            "Amassed millions of followers for dozens of clients",
            "Top-tier collabs, including bluechips",
          ]}
        />
        <div>
          <a href="/partners/"> *View all partners</a>
        </div>
      </div>
      <UseCaseCustomers customers={customers} />
    </div>
  </section>
)

const Home = () => (
  <Layout
    canonical=""
    description={customFields.description}
    title="Dee in Tech"
    replaceTitle
  >
    <Header />
    <Section fullWidth center>
      <Services />
    </Section>
    <PartnersData />
    <Results />
    <About />
    <GetStarted />
  </Layout>
)

export default Home
