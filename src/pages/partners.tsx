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
    id: "law,etalawyr",
    logo: {
      ...logos.metalaw,
      height: 30,
      width: 120,
    },
    summary:
      "Meta Law is a Web3 law firm that offers comprehensive legal advisory to guide projects throughout their entire life-cycle from initial formation, to growth, to VC financing + EXIT. Over 100 clients, including BAYC, Cryptopunks, Citizen Capital, NeoTokyo, NFArcade, ARC, SteadyStack, Dark Echolon, etc.",
    image: {
      alt: "Metalaw logo",
      src: "/img/partners/6.png",
      width: 525,
    },
  },
  {
    id: "seerlabs",
    logo: {
      ...logos.seerlabs,
      height: 60,
      width: 180,
    },
    summary:
      "Seer Labs is a leading incubator in Asia that provides marketing and fundraising services, listing on top-tier exchanges (OKX, Huobi, MEXC, etc), networking, roadshow, etc. Served 60+ clients, including Polygon, Verasity, Aave, Erlond, Xend Finance, etc.",
    image: {
      alt: "Seer Labs logo",
      src: "/img/partners/7.png",
      width: 225,
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
    id: "X3 Labs",
    logo: {
      ...logos.x3,
      width: 60,
    },
    summary:
      "X3 is a blockchain arm of XURPAS and is the largest one-stop Web3 dev shop in Shoutheast Asia. The team consists of 200+ devs and 1000+ artsists, testers, etc. Hundreds of B2B and B2C clients, including Samsung, L'Oréal, Target, AirAsia, CitiBank, Insomnia, etc.",
    image: {
      alt: "X3 logo",
      src: "/img/partners/5.png",
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
              Receive world-class services via a curated partner network of Web3
              agencies, studios, and individuals. For inquiries, please{" "}
              <a href="#start">contact here</a>.
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
