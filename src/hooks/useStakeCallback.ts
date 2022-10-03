import { ethers } from 'ethers'
import { useMemo } from 'react'
import { useTransactionAdder } from '../state/transactions/hooks'
import { useTokenContract } from './useContract'
import { calculateGasMargin } from '../utils'
export const transfer = async ({
  amount,
  to,
  contract,
  gasEstimate
}: {
  amount: any
  to: string
  contract: any
  gasEstimate: any
}) => {
  console.log(contract, 'contract')
  console.log(contract?.transfer, '878787')
  return contract?.transfer(to, amount, { gasLimit: calculateGasMargin(gasEstimate) })
}
export function useStakeCallback({
  amount,
  to,
  contractAddress
}: {
  amount: any
  to: any
  contractAddress: any
}): {
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const addTransaction = useTransactionAdder()
  const contract = useTokenContract(contractAddress, true)

  return useMemo(() => {
    return {
      callback: async function onStake(): Promise<string> {
        const parameters = [to, ethers.utils.parseUnits(amount.toExact(), 6)]
        const gasEstimate = await contract?.estimateGas['transfer'](...parameters)
        return transfer({
          amount: ethers.utils.parseUnits(amount.toExact(), 6),
          to,
          contract,
          gasEstimate
        })
          .then((response: any) => {
            console.log(response)
            const base = `质押 ${amount.toExact()} EOTC-USDT LP`

            addTransaction(response, {
              summary: base
            })

            return response.hash
          })
          .catch((error: any) => {
            // if the user rejected the tx, pass this along
            if (error?.code === 4001 || error?.code === 'ACTION_REJECTED') {
              throw new Error('交易被拒绝')
            } else {
              console.log(error, 'error')
              console.error(`质押失败`, error, 'error')
              throw new Error(`质押失败: ${error.message}`)
            }
          })
      },
      error: null
    }
  }, [addTransaction, amount, contract, to])
}
