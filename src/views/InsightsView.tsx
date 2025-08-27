import { useContext } from 'react';
import { Post } from '../types';
import { FilterContext } from '../state/FilterContext';
import { filterPosts, insightScore } from '../lib/analytics';

export default function InsightsView({ posts }: { posts: Post[] }) {
  const { filters } = useContext(FilterContext);
  const filtered = filterPosts(posts, filters);
  const spikes = filtered.filter((p) => insightScore(p) > 70);
  return (
    <div style={{ marginTop: '1rem' }}>
      {spikes.map((p) => (
        <div
          key={p.id}
          style={{ borderBottom: '1px solid #ddd', marginBottom: '0.5rem' }}
        >
          <strong>{p.hashtags.join(', ')}</strong> - {p.content} ({p.sentiment.toFixed(2)})
        </div>
      ))}
      {spikes.length === 0 && <div>No spikes detected.</div>}
    </div>
  );
}
