import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // {income: 0, outcome: 0, total: 0}

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, trasanction) => {
        if (trasanction.type === 'income') {
          acc.income += trasanction.price
          acc.total += trasanction.price
        } else {
          acc.outcome += trasanction.price
          acc.total -= trasanction.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
