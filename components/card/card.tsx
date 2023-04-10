import styles from 'card.module.scss';
import Image from 'next/image';

export default function Card({ blog }) {
  return (
    <article
      key={blog.id}
      className="relative border h-[337px] shadow-sm flex flex-col hover:shadow-2xl transition cursor-pointer"
    >
      <div className="text-white font-semibold text-[10px] z-20 absolute top-0 left-0 right-0 h-[5rem] p-[0.9rem]">
        [ОБЗОРЫ]
      </div>
      <div className="w-[100%] h-[50%] shrink-0 relative">
        <Image className="object-cover" fill src={blog.img} alt="image blog" />
      </div>
      <div className="py-[1.25rem] px-[0.9375rem] flex flex-col justify-between grow">
        <h3 className="mb-[1.25rem] max-h-[6.25rem] overflow-y-hidden font-semibold leading-tight tracking-[-.1px] break-words text-[#161c26]">
          {blog.title}
        </h3>
        <p className="text-[#667180] text-xs tracking-[-0.2px]">{blog.date}</p>
      </div>
    </article>
  );
}
