import TagsItem from '../tags-item/tags-item';

export default function BlogsGroupByTags({ groupedBlogs }) {
  return (
    <>
      {groupedBlogs.map((group, i) => <TagsItem key={i} posts={group.posts} title={group.title} count={group.count}/>)}
    </>
  );
}
