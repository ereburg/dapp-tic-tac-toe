import { EnkryptSVG, PolkadotSVG, SubWalletSVG, TalismanSVG } from './assets'

export const WALLET = {
  'polkadot-js': { name: 'Polkadot JS', SVG: PolkadotSVG },
  'subwallet-js': { name: 'SubWallet', SVG: SubWalletSVG },
  talisman: { name: 'Talisman', SVG: TalismanSVG },
  enkrypt: { name: 'Enkrypt', SVG: EnkryptSVG },
}

export const WALLETS = Object.entries(WALLET) as Entries<typeof WALLET>
