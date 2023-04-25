import { Inter } from 'next/font/google';

import {
  TonPageCommunity,
  TonPageWelcome,
  TonPageDistribution,
  TonPageToncoin,
  TonPageWallet,
  TonPageApps,
  TonPageFooter,
} from '../../components/ton-page-components';

const inter = Inter({ subsets: ['cyrillic'] });

export default function TonPage() {
  return (
    <main className={inter.className}>
      <TonPageWelcome />
      <TonPageDistribution />
      <TonPageWallet />
      <TonPageToncoin />

      {/* <TonPageCommunity /> */}
      <TonPageApps />
      <TonPageFooter />
    </main>
  );
}
