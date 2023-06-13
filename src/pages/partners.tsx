import clsx from "clsx"
import React from "react"
import Layout from "../theme/Layout"

import caCss from "../css/partners/card.module.css"
import juCss from "../css/partners/jumbotron.module.css"
import seCss from "../css/section.module.css"
import { logos } from "../assets/logos"
import type { CustomerLogo } from "../assets/types"
import { GetStarted } from "../modules/get-started"

type Partner = {
  id: string
  logo: CustomerLogo
  summary: string
  quote?: {
    author: string
    position: string
  }
  image: {
    alt: string
    src: string
    width?: number
    height?: number
  }
}

const partners: Partner[] = [
  {
    id: "arcadia",
    logo: {
      ...logos.arcadia,
    },
    summary:
      "Arcadia is a premier all-on-one Web3 marketing firm. It has helped brands raise over $71 M in Web3 and amass over 10 M followers with Web3 growth strategies for 75+ clients, including Helix Metaverse, Arties, Lime Wire, Moonrunners, Saishu Mirai Shoujo, etc.",
    image: {
      alt: "Arcadia logo",
      src: "/img/partners/1.png",
      width: 200,
    },
  },
  {
    id: "lvrg",
    logo: {
      ...logos.lvrg,
      height: 30,
      width: 150,
    },
    summary:
      "LVRG is a leading BD studio aimed to accelerate the growth of Web3 brands. Served over 200 clients, including Pudgy Penguins, BAYC, Gala Games, McLaren, Decrypt, Ethermail, etc.",
    image: {
      alt: "LVRG logo",
      src: "/img/partners/2.png",
    },
  },
  {
    id: "pacificmeta",
    logo: {
      ...logos.pacificmeta,
      width: 200,
    },
    summary:
      "Pacific Meta Inc. provides comprehensive marketing support for overseas Web3 projects in the Japanese market, including strategy development, localization, promotion, and community management. Clients: Cross the Ages, Upland, Derby Stars, Polkadot, Huobi, etc.",
    image: {
      alt: "Pacific Meta logo",
      src: "/img/partners/3.png",
      width: 225,
    },
  },
  {
    id: "rev3",
    logo: {
      ...logos.rev3,
      height: 50,
      width: 140,
    },
    summary:
      "Rev3 is Web3 development studio focused on UI/UX design, generative art, minting and staking contracts. Clients include: Llamaverse, Bridg3, Yugiyn, Godjira, Quirkies, etc.",
    image: {
      alt: "Rev3 logo",
      src: "/img/partners/4.png",
      width: 525,
    },
  },
]

const Partners = () => {
  const title = "Partners"
  const description = "Discover the partners I work with"

  return (
    <Layout canonical="/partners" description={description} title={title}>
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={juCss.jumbotron}>
          <div className={juCss.jumbotron__left}>
            <h1 className={seCss.section__title}>Partners</h1>
            <p
              className={clsx(
                seCss.section__subtitle,
                juCss.jumbotron__subtitle,
              )}
            >
              I teamed up with top-tier agencies and studios to provide the best
              Web3 services, including marketing, development, auditing,
              fundrasing, etc. If you want to work with me or set up a
              partnership, please don't hesitate to{" "}
              <a href="#start">reach out</a>.
            </p>
          </div>
        </div>
      </section>

      {partners.map((partner) => {
        const summary = (
          <p className={caCss.card__summary}>
            <img
              className={caCss.card__logo}
              alt={partner.logo.alt}
              src={partner.logo.src}
              height={partner.logo.height}
              width={partner.logo.width}
            />
            {partner.summary}
            {typeof partner.quote !== "undefined" && (
              <em className={caCss.card__author}>
                - <strong>{partner.quote.author}</strong>,{" "}
                {partner.quote.position}
              </em>
            )}
          </p>
        )

        const illustration = (
          <div className={caCss.card__illustration}>
            <img alt={partner.image.alt} src={partner.image.src} />
          </div>
        )

        return (
          <section
            key={partner.id}
            className={clsx(seCss.section, seCss["section--inner"])}
          >
            <div className={caCss.card}>
              {summary} {illustration}
            </div>
          </section>
        )
      })}
      <div id="start">
        <GetStarted />
      </div>
    </Layout>
  )
}

export default Partners
