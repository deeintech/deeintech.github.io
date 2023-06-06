import React from "react"
import SvgImage from "../SvgImage"
import clsx from "clsx"
import styles from "./styles.module.css"
import { logos as logosManifest } from "../../assets/logos"

// importing SVGs individually to inject them into the DOM and avoid HTTP request
import arcadia from "../../../static/img/logos/arcadia.svg"
import pacificmeta from "../../../static/img/logos/pacificmeta.svg"
import darklabs from "../../../static/img/logos/darklabs.svg"
import lvrg from "../../../static/img/logos/lvrg.svg"
import rev3 from "../../../static/img/logos/rev3.svg"
// import opn from "../../../static/img/logos/opn.svg"
// import bga from "../../../static/img/logos/bga.svg"

const svgs = [
  {
    ...logosManifest.arcadia,
    svg: arcadia,
  },
  {
    ...logosManifest.pacificmeta,
    svg: pacificmeta,
  },
  {
    ...logosManifest.darklabs,
    svg: darklabs,
    width: 36,
    height: 36,
  },
  {
    ...logosManifest.lvrg,
    svg: lvrg,
    width: 140,
    height: 24,
  },
  {
    ...logosManifest.rev3,
    svg: rev3,
  },
  // {
  //   ...logosManifest.opn,
  //   svg: opn,
  //   width: 36,
  //   height: 36,
  // },
  // {
  //   ...logosManifest.bga,
  //   svg: bga,
  // },
]

export const Logos = ({ isDarkTheme }) => (
  <>
    {svgs.map(({ svg, width, height, alt, offset }, i) => (
      <div
        key={i}
        className={clsx(styles.logo, { [styles.logoDark]: isDarkTheme })}
        style={{ ...(offset !== undefined ? { marginTop: offset } : {}) }}
      >
        <SvgImage
          title={alt}
          key={i}
          image={React.createElement(svg, {
            alt,
            width,
            height,
          })}
        />
      </div>
    ))}
  </>
)
