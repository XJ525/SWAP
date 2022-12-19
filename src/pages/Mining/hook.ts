import { Token } from 'eotc-bscswap-sdk'
import { useEffect, useState } from 'react'
// import { CHAIN_IDS_TO_NAMES } from '../../constants/chains'
import { useActiveWeb3React } from '../../hooks'
// import { getStakeRecord } from '../../services'
import { useTokenBalance } from '../../state/wallet/hooks'
import { LpTokenList } from '../../constants/lpTokenList'
import { useLpTokenPoolV2Contract } from '../../hooks/useContract'
import dayjs from 'dayjs'
import { formatUnits } from '@ethersproject/units'
const APY_LIST = {
  6: 0.48,
  12: 0.72,
  24: 1
}
function handleorderNumber(arr: { id: any }[]) {
  return arr.map((item: { id: any }) => {
    while (item.id.length < 8) {
      item.id = '0' + item.id
    }
    return item
  })
}
/**
 * 用户质押记录
 * @param {*} contractAddress  合约地址
 * @param {*} accountAddress  用户地址 contract
 * @param {*} lpTokenAddress lptoken地址
 * @returns
 */
export const allPledge = async ({
  contract,
  accountAddress,
  lpTokenAddress
}: {
  contract: any
  accountAddress: string
  lpTokenAddress: any
}) => {
  const result = await contract.allPledge(accountAddress, lpTokenAddress)
  console.log(result, 'result')
  let resultArr: any[] = []
  if (result.length > 0) {
    resultArr = [
      (result[0],
      result[1].map((item: { toString: () => any }) => {
        const data = item.toString()
        const dataArr = data.split(',')
        const obj: { [key in string]: string } = {}
        obj.id = dataArr[0]
        obj.cycle = dataArr[1]
        obj.date = dayjs.unix(dataArr[2]).format('YYYY-MM-DD HH:mm')
        obj.num = formatUnits(dataArr[3], 6).toString()
        obj.type = dataArr[4] === '1' ? '2' : dataArr[4] === '0' ? '1' : dataArr[4]
        obj.earnings = (obj.num as any) * APY_LIST[obj.cycle] + ''
        return obj
      }))
    ]
  }

  return handleorderNumber(resultArr[0])
}
// import { useTransactionAdder } from '../../state/transactions/hooks'

export function useGetStakeRecord() {
  const [stakeRecord, setStakeRecord] = useState([] as any)
  const [loadng, setLoading] = useState(true)
  const [update, setUpdate] = useState(false)
  const { account, chainId } = useActiveWeb3React()
  const contract = useLpTokenPoolV2Contract(true)

  useEffect(() => {
    async function handleStakeRecord() {
      // const result = await getStakeRecord({
      //   net: CHAIN_IDS_TO_NAMES[chainId as number]?.toLowerCase(),
      //   ads: account as string
      // })
      if (account && chainId) {
        const LPTOKEN_ADDRESS = LpTokenList[chainId]
        const result = await allPledge({
          contract,
          accountAddress: account,
          lpTokenAddress: LPTOKEN_ADDRESS
        })
        setStakeRecord(result)
      }

      setLoading(false)
    }
    account && handleStakeRecord()
  }, [account, chainId, contract, update])
  return [stakeRecord, setStakeRecord, loadng, setUpdate]
}
export function useGetLpTokenBalance() {
  const { account, chainId } = useActiveWeb3React()
  const LPTOKEN_ADDRESS = LpTokenList[chainId as number]
  const LpTonke = new Token(chainId as number, LPTOKEN_ADDRESS, 12, 'EOTC-V2', 'Eotcswap V2')
  const userPoolBalance = useTokenBalance(account ?? undefined, LpTonke)
  return { LPTOKEN_ADDRESS, userPoolBalance, LpTonke }
}
