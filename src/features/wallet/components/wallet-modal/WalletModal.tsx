import Identicon from '@polkadot/react-identicon';
import { decodeAddress } from '@gear-js/api';
import { useAccount } from '@gear-js/react-hooks';
import { Button } from '@gear-js/ui';
import clsx from 'clsx';
import { copyToClipboard } from 'utils';
import { Modal } from 'components';
import { ReactComponent as EditSVG } from 'assets/images/icons/edit.svg';
import { ReactComponent as CopySVG } from 'assets/images/icons/copy.svg';
import { Button as VaraButton } from 'components/ui/button';
import { ExitSVG } from '../../assets';
import { WALLETS } from '../../consts';
import { useWallet } from '../../hooks';
import { WalletItem } from '../wallet-item';
import styles from './WalletModal.module.scss';

type Props = {
  onClose(): void;
};

function WalletModal({ onClose }: Props) {
  const { extensions, account, login, logout } = useAccount();

  const { wallet, walletAccounts, setWalletId, resetWalletId, getWalletAccounts, saveWallet, removeWallet } =
    useWallet();

  const getWallets = () =>
    WALLETS.map(([id, { SVG, name }]) => {
      const isEnabled = extensions.some((extension) => extension.name === id);
      const status = isEnabled ? 'Enabled' : 'Disabled';

      const accountsCount = getWalletAccounts(id).length;
      const accountsStatus = `${accountsCount} ${accountsCount === 1 ? 'account' : 'accounts'}`;

      const onClick = () => setWalletId(id);

      return (
        <li key={id}>
          <VaraButton variant="white" className={styles.walletButton} onClick={onClick} disabled={!isEnabled}>
            <WalletItem icon={SVG} name={name} />

            <span className={styles.status}>
              <span className={styles.statusText}>{status}</span>

              {isEnabled && <span className={styles.statusAccounts}>{accountsStatus}</span>}
            </span>
          </VaraButton>
        </li>
      );
    });

  const getAccounts = () =>
    walletAccounts?.map((_account) => {
      const { address, meta } = _account;

      const isActive = address === account?.address;

      const handleClick = () => {
        login(_account);
        saveWallet();
        onClose();
      };

      const handleCopyClick = () => {
        const decodedAddress = decodeAddress(address);

        copyToClipboard(decodedAddress);
        onClose();
      };

      return (
        <li key={address} className={styles.account}>
          <VaraButton
            variant={isActive ? 'primary' : 'white'}
            className={styles.accountButton}
            onClick={handleClick}
            disabled={isActive}>
            <Identicon value={address} size={20} theme="polkadot" />
            <span>{meta.name}</span>
          </VaraButton>

          <Button icon={CopySVG} color="transparent" onClick={handleCopyClick} />
        </li>
      );
    });

  const handleLogoutButtonClick = () => {
    logout();
    removeWallet();
    onClose();
  };

  return (
    <Modal heading="Wallet connection" onClose={onClose}>
      <ul className={styles.list}>{getAccounts() || getWallets()}</ul>

      {wallet && (
        <footer className={styles.footer}>
          <button type="button" className={styles.walletButton} onClick={resetWalletId}>
            <WalletItem icon={wallet.SVG} name={wallet.name} />

            <EditSVG />
          </button>

          {account && (
            <Button
              icon={ExitSVG}
              text="Exit"
              color="transparent"
              className={styles.logoutButton}
              onClick={handleLogoutButtonClick}
            />
          )}
        </footer>
      )}
    </Modal>
  );
}

export { WalletModal };
