import { useContext } from 'react';
import { Post } from '../types';
import { FilterContext } from '../state/FilterContext';
import { filterPosts } from '../lib/analytics';
import Filters from '../components/Filters';
import KPIs from '../components/KPIs';
import MapSVG from '../components/MapSVG';

export default function MapView({ posts }: { posts: Post[] }) {
  const { filters } = useContext(FilterContext);
  const filtered = filterPosts(posts, filters);
  return (
    <div>
      <Filters />
      <KPIs posts={filtered} />
      <MapSVG posts={filtered} />
    </div>
  );
}
