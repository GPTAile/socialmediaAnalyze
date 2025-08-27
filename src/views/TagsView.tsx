import { useContext } from 'react';
import { Post } from '../types';
import { FilterContext } from '../state/FilterContext';
import { filterPosts, countByHashtag } from '../lib/analytics';

export default function TagsView({ posts }: { posts: Post[] }) {
  const { filters } = useContext(FilterContext);
  const filtered = filterPosts(posts, filters);
  const counts = countByHashtag(filtered);
  const tags = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return (
    <div style={{ marginTop: '1rem' }}>
      {tags.map(([tag, count]) => (
        <div key={tag} style={{ marginBottom: '0.25rem' }}>
          {tag} - {count}
        </div>
      ))}
      {tags.length === 0 && <div>No tags</div>}
    </div>
  );
}
