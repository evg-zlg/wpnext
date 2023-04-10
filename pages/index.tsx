import { blogsdb } from '../assets/tempDB/blogs';
import Favorites from '../components/favorites/favorites';

export default function MainPage() {
  const blogs = blogsdb.slice(0, 4);

  return (
    <div className="wrapper min-w-[50%] max-w-[72rem] mx-auto">
      <h1 className="text-[0]">wpcraft</h1>
      <section className="mt-20 mb-24 flex justify-between relative">
        <Favorites blogs={blogs} />
        <ul className="max-w-[40%] flex flex-column items-stretch">
          <li className="mb-[1.25rem]">
            <article className="shadow-2xl	">
              Google анонсировала технологию высокопроизводительной 3D-графики в
              Chrome
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}
