import { blogsdb } from '../assets/tempDB/blogs';
import Image from 'next/image';

export default function MainPage() {
  const blogs = blogsdb.slice(0, 4);

  return (
    <main className="container min-w-[50%] max-w-[1000px] mx-auto">
      <h1 className="text-[0]">wpcraft</h1>
      <section className="mt-20 mb-24 flex justify-between relative">
        <h2 className="text-[0] absolute">Свежие материалы</h2>
        <div className="flex-auto	max-w-[55%] grid gap-[1.25rem] grid-cols-3">
          {blogs.map((blog, i) => {
            if (i === 0) {
              return (
                <article className="border  col-span-3 min-h-[18.75rem] shadow-sm cursor-pointer relative flex flex-row items-end">
                  <div className="text-white z-20 absolute top-0 left-0 p-[0.9rem] font-semibold text-[10px]">
                    [ОБЗОРЫ]
                  </div>
                  <div className="relative z-20 grow py-[1.25rem] px-[0.9rem]">
                    <h3 className="text-white text-[40px] font-semibold mb-[1.25rem] leading-[1.2]">
                      {blog.title}
                    </h3>
                    <p className="text-white text-xs tracking-[-0.2px]">
                      {blog.date}
                    </p>
                  </div>
                  <div className="w-[100%] h-[100%] z-10 bg-gradient-to-tr from-slate-950/[.6] to-slate-950/[.2] absolute inset-0" />
                  <div className="w-[100%] h-[100%] absolute inset-0">
                    <Image
                      fill
                      className="w-100% "
                      src={blog.img}
                      alt="image blog"
                    />
                  </div>
                </article>
              );
            }
            return (
              <article className="border h-[337px] shadow-sm flex flex-col hover:shadow-2xl transition cursor-pointer">
                <div className="w-[100%] h-[50%] shrink-0 relative">
                  <Image
                    className="object-cover"
                    fill
                    src={blog.img}
                    alt="image blog"
                  />
                </div>
                <div className="py-[1.25rem] px-[0.9375rem] flex flex-col justify-between grow">
                  <h3 className="mb-[1.25rem] max-h-[6.25rem] overflow-y-hidden font-semibold tracking-[-.1px] break-words text-[#161c26]">
                    {blog.title}
                  </h3>
                  <p className="text-[#667180] text-xs tracking-[-0.2px]">
                    {blog.date}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <ul className="max-w-[40%] flex flex-column items-stretch">
          <li className="mb-[1.25rem]">
            <article className="shadow-2xl	">
              Google анонсировала технологию высокопроизводительной 3D-графики в
              Chrome
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
}
