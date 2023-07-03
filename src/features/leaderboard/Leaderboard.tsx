import { useMemo, useState } from 'react'
import { Button } from '@gear-js/ui'
import { withoutCommas } from '@gear-js/react-hooks'
import { useForm } from '@mantine/form'
import clsx from 'clsx'
import { Loader } from '@/components'
import { ReactComponent as RightArrow } from './assets/right-arrow.svg'
import { ReactComponent as RightDoubleArrow } from './assets/right-double-arrow.svg'
import { HEADERS } from './consts'
import { getMedal, getPages, getParticipants, withSearch } from './utils'
import { useLeaderboardState } from './hooks'
import styles from './Leaderboard.module.scss'
import { PointsBalance } from '@/components/ui/balance'
import { Input } from '@/components/ui/input'

const initialValues = { searchQuery: '' }

export function Leaderboard() {
  const state = useLeaderboardState()
  console.log({ state })
  const participants = useMemo(() => getParticipants(state || {}), [state])
  const participantsCount = participants.length

  const { getInputProps, values } = useForm({ initialValues })
  const { searchQuery } = values

  const [pageIndex, setPageIndex] = useState(0)
  const pages = useMemo(
    () => getPages(withSearch(participants, searchQuery), 10),
    [participants, searchQuery]
  )

  const page = pages[pageIndex]
  const pagesCount = pages.length
  const pageNumber = pagesCount ? pageIndex + 1 : pageIndex
  const lastPageIndex = pagesCount ? pagesCount - 1 : pagesCount
  const isFirstPage = pageIndex === 0
  const isLastPage = pageIndex === lastPageIndex

  const prevPage = () => setPageIndex((prevValue) => prevValue - 1)
  const nextPage = () => setPageIndex((prevValue) => prevValue + 1)
  const firstPage = () => setPageIndex(0)
  const lastPage = () => setPageIndex(lastPageIndex)

  const getHeaders = () =>
    HEADERS.map((header) => <th key={header}>{header}</th>)

  const getRows = () =>
    page?.map(
      ({ rank, address, name, registrationDate, referrals, totalPoints }) => {
        const medal = getMedal(rank)
        const rankClassName = clsx(styles.rank, medal && styles[medal])

        const timestamp = +withoutCommas(registrationDate)
        const date = new Date(timestamp).toLocaleDateString()

        return (
          <tr key={address}>
            <td>
              <span className={rankClassName}>{rank}</span>
            </td>
            <td className={styles.nameCell}>
              <span className={styles.name}>{name}</span> ({address})
            </td>
            <td>{date}</td>
            <td>{referrals}</td>
            <td>
              <PointsBalance value={totalPoints} />
            </td>
          </tr>
        )
      }
    )

  return state ? (
    <div className={styles.leaderboard}>
      <header className={styles.header}>
        <h3 className={styles.heading}>
          Total Participants: {participantsCount}
        </h3>
        <Input {...getInputProps('searchQuery')} className={styles.input} />
      </header>

      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>{getHeaders()}</tr>
        </thead>

        <tbody>{getRows()}</tbody>
      </table>

      <footer className={styles.footer}>
        <Button
          icon={RightDoubleArrow}
          color="transparent"
          className={styles.leftButton}
          onClick={firstPage}
          disabled={isFirstPage}
        />
        <Button
          icon={RightArrow}
          color="transparent"
          className={styles.leftButton}
          onClick={prevPage}
          disabled={isFirstPage}
        />

        <p className={styles.text}>
          <span className={styles.pageNumber}>{pageNumber}</span>
          <span className={styles.pagesCount}>out of {pagesCount}</span>
        </p>

        <Button
          icon={RightArrow}
          color="transparent"
          onClick={nextPage}
          disabled={isLastPage}
        />
        <Button
          icon={RightDoubleArrow}
          color="transparent"
          onClick={lastPage}
          disabled={isLastPage}
        />
      </footer>
    </div>
  ) : (
    <Loader />
  )
}
