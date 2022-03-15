import React from 'react'
import { useEagerConnect } from '../../../hooks/useEgerConnect'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useWalletProvider } from '../../../hooks/useWalletProvider'
import { useState } from 'react'
import { SiQuantconnect } from 'react-icons/si'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const CSS_HANDLES = ['signInButton']

export function ConnectWallet() {
  const [eagerConnect] = useState(false)
  useEagerConnect(eagerConnect)
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWalletProvider()
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <div>
      <button
        className={`${handles.signInButton}`}
        onClick={() => (connected ? deactivate() : setOpen(true))}
      >
        <SiQuantconnect style={{ marginRight: '10px' }} />
        {connected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  )
}
