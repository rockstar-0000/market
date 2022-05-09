import { toDataUrl } from 'myetherwallet-blockies'
import React, { ReactElement } from 'react'
import styles from './Avatar.module.css'

export default function Avatar({
  accountId,
  ensAvatar,
  className
}: {
  accountId: string
  ensAvatar?: string
  className?: string
}): ReactElement {
  if (!accountId) return null

  return (
    <img
      className={`${className || ''} ${styles.avatar} `}
      src={ensAvatar || toDataUrl(accountId)}
      alt="Avatar"
      aria-hidden="true"
    />
  )
}
