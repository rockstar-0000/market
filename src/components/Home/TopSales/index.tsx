import { useUserPreferences } from '@context/UserPreferences'
import AccountList from 'src/components/Home/TopSales/AccountList'
import { getTopAssetsPublishers } from '@utils/subgraph'
import React, { ReactElement, useEffect, useState } from 'react'
import { UserSalesQuery_users as UserSales } from 'src/@types/subgraph/UserSalesQuery'
import styles from './index.module.css'

export default function TopSales({
  title,
  action
}: {
  title: ReactElement | string
  action?: ReactElement
}): ReactElement {
  const { chainIds } = useUserPreferences()
  const [result, setResult] = useState<UserSales[]>([])
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    if (chainIds.length === 0) {
      setResult([])
      setLoading(false)
      return
    }

    async function init() {
      try {
        setLoading(true)
        const publishers = await getTopAssetsPublishers(chainIds)
        setResult(publishers)
        setLoading(false)
      } catch (error) {
        // Logger.error(error.message)
      }
    }
    init()
  }, [chainIds])

  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <AccountList accounts={result} isLoading={loading} />
      {action && action}
    </section>
  )
}
