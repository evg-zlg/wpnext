import styles from './ton-page-apps.module.scss';
import stylreReuse from '../ton-page-reuse.module.scss';
import Image from 'next/image';

import linkArow from './icons/link-arrow-icon.svg';
import mobileIcon from './icons/mobile-icon.svg';
import domainsIcon from './icons/domains-icon.svg';
import VPNIcon from './icons/VPN-icon.svg';
import fragmentIcon from './icons/fragment-icon.svg';
import fantonIcon from './icons/fanton-icon.svg';

import toneMobileImg from '../../../assets/images/ton_mobile.png';
import toneDomainsImg from '../../../assets/images/domains.png';
import toneVPNImg from '../../../assets/images/vpn.png';
import toneFragmentImg from '../../../assets/images/fragment.png';
import toneFantonImg from '../../../assets/images/fanton.png';
import toneAllAppsImg from '../../../assets/images/all_apps.png';
import { TonLink } from '../ton-link/ton-link';
import { CardWithApp } from './card-with-app';

function TonPageApps() {
  return (
    <section className={styles.apps}>
      <div className={stylreReuse.tonWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Приложения и сервисы</h2>
          <TonLink href="https://ton.app/" text="Обзор экосистемы" />
        </div>
        <div className={styles.grid}>
          <CardWithApp
            styleClass={styles.cardMobile}
            href="https://tonmobile.com/"
            titleIcon={mobileIcon}
            titleText="Mobile"
            boldDescript="Анонимная eSIM"
            descript="Доступный и безопасный мобильный интернет-провайдер для дома и
                      путешествий."
            img={toneMobileImg}
          />

          <CardWithApp
            styleClass={styles.cardDomains}
            href="https://dns.ton.org/"
            titleIcon={domainsIcon}
            titleText="Domains"
            boldDescript="Простой адрес"
            descript="Кошелёк или веб-сайт можно легко найти в сети TON."
            img={toneDomainsImg}
          />

          <CardWithApp
            styleClass={styles.cardVPN}
            href="https://www.tonvpn.me"
            titleIcon={VPNIcon}
            titleText="VPN"
            boldDescript="Доступный VPN"
            descript="Быстрый, безопасный и доступный способ защитить доступ в Интернет."
            img={toneVPNImg}
          />

          <CardWithApp
            styleClass={styles.cardFragment}
            href="https://fragment.com/premium"
            titleIcon={fragmentIcon}
            titleText="Fragment"
            boldDescript="Telegram Premium"
            descript="Используй свой криптокошелек для оплаты подписки для себя и
                      друзей."
            img={toneFragmentImg}
          />

          <CardWithApp
            styleClass={styles.cardFanton}
            href="https://fan-ton.com/"
            titleIcon={fantonIcon}
            titleText="Fanton"
            boldDescript="Игры и коллекции"
            descript="Создай виртуальную футбольную команду, используя NFT-карты
                      реальных игроков."
            img={toneFantonImg}
          />

          <a
            href="https://ton.app/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardAllApps}
          >
            <p className={styles.boldDescript}>
              Открой для себя сотни других приложений и сервисов
            </p>
            <Image
              className={styles.imgLast}
              priority
              src={toneAllAppsImg}
              alt="all apps"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export { TonPageApps };
