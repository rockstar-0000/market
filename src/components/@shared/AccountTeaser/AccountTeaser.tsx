import React, { ReactElement, useEffect, useState } from 'react'
import Dotdotdot from 'react-dotdotdot'
import Link from 'next/link'
import styles from './AccountTeaser.module.css'
import { useCancelToken } from '@hooks/useCancelToken'
import { accountTruncate } from '@utils/web3'
import Avatar from '../atoms/Avatar'

declare type AccountTeaserProps = {
  accountTeaserVM: AccountTeaserVM
  place?: number
}

export default function AccountTeaser({
  accountTeaserVM,
  place
}: AccountTeaserProps): ReactElement {
  const [profile, setProfile] = useState<Profile>()
  const newCancelToken = useCancelToken()

  // useEffect(() => {
  //   if (!accountTeaserVM) return
  //   async function getProfileData() {
  //     const profile = await get3BoxProfile(
  //       accountTeaserVM.address,
  //       newCancelToken()
  //     )
  //     if (!profile) return
  //     setProfile(profile)
  //   }
  //   getProfileData()
  // }, [accountTeaserVM, newCancelToken])

  return (
    <article className={styles.teaser}>
      <Link href={`/profile/${accountTeaserVM.address}`}>
        <header className={styles.header}>
          {place && <span>{place}</span>}
          <Avatar
            accountId={accountTeaserVM.address}
            className={styles.blockies}
          />
          <div>
            <Dotdotdot clamp={3}>
              <h3 className={styles.name}>
                {profile?.name
                  ? profile?.name
                  : accountTruncate(accountTeaserVM.address)}
              </h3>
            </Dotdotdot>
            <p className={styles.sales}>
              {`${accountTeaserVM.nrSales} ${
                accountTeaserVM.nrSales === 1 ? 'sale' : 'sales'
              }`}
            </p>
          </div>
        </header>
      </Link>
    </article>
  )
}
