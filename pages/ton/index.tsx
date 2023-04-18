import { Inter } from 'next/font/google'

import { TonPageWelcome } from "../../components/ton-page-components";
import { TonPageDistribution } from "../../components/ton-page-components/ton-page-distribution/ton-page-distribution";

const inter = Inter({subsets: ['cyrillic']});

export default function TonPage() {
  return (
    <main className={inter.className}>
      <TonPageWelcome />
      <TonPageDistribution />
    </main>
  );
}
