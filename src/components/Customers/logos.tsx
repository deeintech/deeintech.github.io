import React from "react"
import SvgImage from "../SvgImage"
import clsx from "clsx"
import styles from "./styles.module.css"
import { logos as logosManifest } from "../../assets/logos"

// importing SVGs individually to inject them into the DOM and avoid HTTP request
import arcadia from "../../../static/img/logos/arcadia.svg"
import pacificmeta from "../../../static/img/logos/pacificmeta.svg"
import rev3 from "../../../static/img/logos/rev3.svg"

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
    ...logosManifest.rev3,
    svg: rev3,
  },
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
