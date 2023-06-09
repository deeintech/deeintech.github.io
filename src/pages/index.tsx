import React from "react"
import clsx from "clsx"
import Button from "@theme/Button"
import customFields from "../config/customFields"

import liCss from "../css/use-cases/list.module.css"
import ucCss from "../css/use-cases/use-case.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"

import Layout from "../theme/Layout"
import { Section } from "../components/Section"
import UseCaseCustomers from "../components/UseCaseCustomers"
// import Customers from "../components/Customers"

import { Results } from "../modules/results"
import { Header } from "../modules/index-header"
import { Services } from "../modules/services"
import { About } from "../modules/about"
import { customers } from "../assets/cusomers"

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
        <h4>Partners overview</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Over $71M in funding secured",
            "Amassed millions of followers for 75+ clients",
            "Hundreds of partnerships, including bluechips",
            "Manage a client portfolio worth close to $1 Bn",
          ]}
        />
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
    {/* <Customers /> */}
    <PartnersData />
    <Section fullWidth center>
      <Services />
    </Section>
    <Results />
    <About />
    <Section fullWidth>
      <Section.Title center size="small">
        <div id="go">Ready to get started?</div>
      </Section.Title>

      <Section noGap center>
        <Section.Subtitle center size="small">
          DM me on <a href="https://twitter.com/deeintech">Twitter</a> or <br />
          <br />
          <div>
            <Button to="https://calendly.com/deeintech/15min" newTab>
              Book a call
            </Button>
          </div>
        </Section.Subtitle>
      </Section>
    </Section>
  </Layout>
)

export default Home
