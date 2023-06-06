import React, { useState, useCallback, useEffect, useRef, memo } from "react"
import clsx from "clsx"
import { isSamePath } from "@docusaurus/theme-common"
import Link from "@docusaurus/Link"
import isInternalUrl from "@docusaurus/isInternalUrl"
import type { Props } from "@theme/DocSidebar"
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs-types"

import styles from "./styles.module.css"
import { ensureTrailingSlash } from "../../utils/ensureTrailingSlash"
import {
  ResponsiveSidebarButton,
  useResponsiveSidebar,
} from "./responsive-button"

function usePrevious(value: unknown) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const isActiveSidebarItem = (
  item: PropSidebarItem,
  activePath: string,
): boolean => {
  if (item.type === "link") {
    return isSamePath(item.href, activePath)
  }

  if (item.type === "category") {
    return (
      item.items?.some((subItem) => isActiveSidebarItem(subItem, activePath)) ??
      false
    )
  }
  return false
}

const DocSidebarItems = memo(function DocSidebarItems({
  items,
  ...props
}: {
  items: readonly PropSidebarItem[]
  tabIndex?: string | number
  onItemClick: (e: any) => void
  collapsible: boolean
  activePath: string
}) {
  return (
    <>
      {items.map((item, index) =>
        item.type === "category" ? (
          <DocSidebarItemCategory key={index} item={item} {...props} />
        ) : (
          <DocSidebarItemLink key={index} item={item} {...props} />
        ),
      )}
    </>
  )
})

function DocSidebarItemCategory({
  item,
  onItemClick,
  collapsible = true,
  activePath,
  ...props
}) {
  const { items, label } = item

  const isActive = isActiveSidebarItem(item, activePath)
  const wasActive = usePrevious(isActive)

  // active categories are always initialized as expanded
  // the default (item.collapsed) is only used for non-active categories
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (!collapsible) {
      return false
    }
    return isActive ? false : item.collapsed
  })

  const menuListRef = useRef<HTMLUListElement>(null)
  const [menuListHeight, setMenuListHeight] = useState<string | undefined>(
    undefined,
  )
  const handleMenuListHeight = (calc = true) => {
    setMenuListHeight(
      calc ? `${menuListRef.current?.scrollHeight ?? 0}px` : undefined,
    )
  }

  // If we navigate to a category, it should automatically expand itself
  useEffect(() => {
    const justBecameActive = isActive && wasActive === false
    if (justBecameActive && collapsed) {
      setCollapsed(false)
    }
  }, [isActive, wasActive, collapsed])

  const handleItemClick = useCallback(
    (e) => {
      e.preventDefault()

      if (typeof menuListHeight === "undefined") {
        handleMenuListHeight()
      }

      setTimeout(() => setCollapsed((state) => !state), 100)
    },
    [menuListHeight],
  )

  if (items.length === 0) {
    return null
  }

  return (
    <li
      className={clsx(styles.menuItem, {
        [styles.collapsed]: collapsed,
      })}
    >
      <a
        className={clsx(styles.link, {
          [styles.sublist]: collapsible,
          [styles.linkActive]: collapsible && isActive,
          [styles.linkText]: !collapsible,
        })}
        onClick={collapsible ? handleItemClick : undefined}
        href={collapsible ? "#!" : undefined}
        {...props}
      >
        {label}
      </a>

      <ul
        className={styles.menuList}
        ref={menuListRef}
        style={{
          height: collapsed ? 0 : menuListHeight,
        }}
        onTransitionEnd={() => {
          if (!collapsed) {
            handleMenuListHeight(false)
          }
        }}
      >
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? "-1" : "0"}
          onItemClick={onItemClick}
          collapsible={collapsible}
          activePath={activePath}
        />
      </ul>
    </li>
  )
}

const Tag = ({ text }: { text: string }) => (
  <div className={styles.tag}>{text}</div>
)

function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  collapsible: _collapsible,
  ...props
}) {
  const { href, label } = item
  const isActive = isActiveSidebarItem(item, activePath)

  return (
    <li className={styles.menuItem} key={label}>
      <Link
        className={clsx(styles.link, {
          [styles.linkActive]: isActive,
          [styles.linkExternal]: !isInternalUrl(href),
        })}
        to={ensureTrailingSlash(href)}
        {...(isInternalUrl(href) && {
          isNavLink: true,
          exact: true,
          onClick: onItemClick,
        })}
        {...props}
      >
        {label}
        {Boolean(item.customProps?.tag) && <Tag text={item.customProps.tag} />}
      </Link>
    </li>
  )
}

function DocSidebar({ path, sidebar, sidebarCollapsible = true }: Props) {
  const {
    showResponsiveSidebar,
    closeResponsiveSidebar,
    toggleResponsiveSidebar,
  } = useResponsiveSidebar()

  return (
    <div className={styles.sidebar}>
      <div
        className={clsx(styles.menu, "thin-scrollbar", {
          [styles.show]: showResponsiveSidebar,
        })}
      >
        <ul className={styles.menuList}>
          <DocSidebarItems
            items={sidebar}
            onItemClick={closeResponsiveSidebar}
            collapsible={sidebarCollapsible}
            activePath={path}
          />
        </ul>
      </div>

      <ResponsiveSidebarButton
        responsiveSidebarOpened={showResponsiveSidebar}
        onClick={toggleResponsiveSidebar}
      />
    </div>
  )
}

export default DocSidebar
