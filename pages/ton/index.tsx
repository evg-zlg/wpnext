import { Inter } from 'next/font/google'

import { TonPageWelcome } from "../../components/ton-page-components";
import { TonPageDistribution } from "../../components/ton-page-components";
import { TonPageToncoin } from '../../components/ton-page-components';
import { TonPageWallet } from '../../components/ton-page-components';

const inter = Inter({subsets: ['cyrillic']});

export default function TonPage() {
  return (
    <main className={inter.className}>
      <TonPageWelcome />
      <TonPageDistribution />
      <TonPageToncoin />
      <TonPageWallet />
    </main>
  );
}
