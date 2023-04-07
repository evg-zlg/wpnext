import Link from 'next/link';
import gitHubIcon from '../../assets/icons/github.svg';
import Image from 'next/image';

export default function Header() {
  return (
      <header className="py-[1.5rem] max-w-[1000px] mx-auto flex justify-between items-center">
        <a
          href="https://wpcraft.ru/"
          className="text-4xl font-medium transition-opacity hover:opacity-80 "
          target="_blank"
          rel="noreferrer"
        >
          wpcraft.ru
        </a>
        <nav className="flex gap-10">
          <Link href="/" className="text-slate-700 tracking-[-.1px] ">
            Главная
          </Link>
          <Link href="/blog">Блог</Link>
          <Link href="/">Каталог</Link>
        </nav>
        <a
          href="https://github.com/evg-zlg/wpnext"
          className="text-4xl font-medium transition-opacity hover:opacity-80 "
          target="_blank"
          rel="noreferrer"
        >
          <Image priority src={gitHubIcon} alt="github wpnext" />
        </a>
      </header>
  );
}
