import React, { useState, useEffect } from 'react'
import { useEagerConnect } from '../../../hooks/useEgerConnect'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useWalletProvider } from '../../../hooks/useWalletProvider'
import { SiQuantconnect } from 'react-icons/si'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const CSS_HANDLES = ['signInButton', 'address']

export function ConnectWallet() {
  const [eagerConnect] = useState(false)
  useEagerConnect(eagerConnect)
  const { setOpen, deactivate } = useWalletModal()
  const { connected, account } = useWalletProvider()
  const { handles } = useCssHandles(CSS_HANDLES)
  const [secret, setSecret] = useState('')

  useEffect(() => {
    if (account == '0x0b7007708F6E4795439e22932708cb3Edd255E9b') {
      setSecret(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      )
    }
  })

  return (
    <div>
      <button
        className={`${handles.signInButton}`}
        onClick={() => (connected ? deactivate() : setOpen(true))}
      >
        <SiQuantconnect style={{ marginRight: '10px' }} />
        {connected ? 'Disconnect' : 'Connect'}
        <p className={`${handles.address}`}>{connected && account}</p>
      </button>

      <div>
        <p>{secret}</p>
      </div>
    </div>
  )
}
