import React from 'react'
import './styles.css'
import { useCssHandles } from 'vtex.css-handles'
import { ConnectWallet } from '../Blockchain/ConnectWallet'

const CSS_HANDLES = ['walletBox']

export function Wallet() {
  const { handles } = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.walletBox}`}>
      <ConnectWallet />
    </div>
  )
}
