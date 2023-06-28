import Identicon from '@polkadot/react-identicon';
import { useState } from 'react';
import { useAccount } from '@gear-js/react-hooks';
import { AnimatePresence } from 'framer-motion';
import { Button } from 'components/ui/button';
import styles from './Wallet.module.scss';
import { WalletModal } from '../wallet-modal';

export function Wallet() {
  const { account, isAccountReady } = useAccount();

  const [isOpen, setIsOpen] = useState(false);

  const openWallet = () => setIsOpen(true);
  const closeWallet = () => setIsOpen(false);

  return (
    <div>
      <Button
        variant={account ? 'black' : 'outline'}
        className={styles.button}
        onClick={openWallet}
        disabled={!isAccountReady}>
        {account && <Identicon value={account.address} size={16} theme="polkadot" />}
        <span>{account ? account.meta.name : 'Connect Wallet'}</span>
      </Button>

      <AnimatePresence>{isOpen && <WalletModal onClose={closeWallet} />}</AnimatePresence>
    </div>
  );
}
