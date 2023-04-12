import Header from '../header/header';
import Meta from '../meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <>{children}</>
    </>
  );
}
