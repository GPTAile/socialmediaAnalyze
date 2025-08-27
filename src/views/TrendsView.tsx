import { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Post } from '../types';
import { FilterContext } from '../state/FilterContext';
import { filterPosts } from '../lib/analytics';

export default function TrendsView({ posts }: { posts: Post[] }) {
  const { filters } = useContext(FilterContext);
  const filtered = filterPosts(posts, filters);
  const data = aggregateByDay(filtered);
  return (
    <LineChart width={600} height={300} data={data} style={{ marginTop: '1rem' }}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="day" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
    </LineChart>
  );
}

function aggregateByDay(posts: Post[]) {
  const map: Record<string, number> = {};
  for (const p of posts) {
    const day = new Date(p.timestamp).toISOString().slice(0, 10);
    map[day] = (map[day] || 0) + 1;
  }
  return Object.entries(map)
    .map(([day, count]) => ({ day, count }))
    .sort((a, b) => a.day.localeCompare(b.day));
}
