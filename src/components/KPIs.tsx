import { Post } from '../types';
import { sentimentAverage } from '../lib/analytics';

export default function KPIs({ posts }: { posts: Post[] }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <div>Total Posts: {posts.length}</div>
      <div>Avg Sentiment: {sentimentAverage(posts).toFixed(2)}</div>
    </div>
  );
}
