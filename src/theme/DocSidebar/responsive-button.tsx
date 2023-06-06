import React, { useState, useCallback, useEffect } from "react"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"
import IconMenu from "@theme/IconMenu"
import clsx from "clsx"
import styles from "./responsive-button.module.css"

const MOBILE_TOGGLE_SIZE = 24

export function useResponsiveSidebar() {
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false)
  useLockBodyScroll(showResponsiveSidebar)

  const windowSize = useWindowSize()
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setShowResponsiveSidebar(false)
    }
  }, [windowSize])

  const closeResponsiveSidebar = useCallback(
    (e) => {
      e.target.blur()
      setShowResponsiveSidebar(false)
    },
    [setShowResponsiveSidebar],
  )

  const toggleResponsiveSidebar = useCallback(() => {
    setShowResponsiveSidebar((value) => !value)
  }, [setShowResponsiveSidebar])

  return {
    showResponsiveSidebar,
    closeResponsiveSidebar,
    toggleResponsiveSidebar,
  }
}

export const ResponsiveSidebarButton = ({
  responsiveSidebarOpened = false,
  onClick,
}) => (
  <button
    aria-label={responsiveSidebarOpened ? "Close menu" : "Open menu"}
    aria-haspopup="true"
    className={clsx(styles.button, "button", "button--secondary", "button--sm")}
    type="button"
    onClick={onClick}
  >
    {responsiveSidebarOpened ? (
      <span className={clsx(styles.icon, styles.closeIcon)}>&times;</span>
    ) : (
      <IconMenu
        className={styles.icon}
        height={MOBILE_TOGGLE_SIZE}
        width={MOBILE_TOGGLE_SIZE}
      />
    )}
  </button>
)
