import { Suspense, useState } from 'react';
import { FilterProvider } from './state/FilterContext';
import { generateFakePosts } from './lib/fakeData';
import MapView from './views/MapView';
import TrendsView from './views/TrendsView';
import TagsView from './views/TagsView';
import InsightsView from './views/InsightsView';
import DataView from './views/DataView';
import TwinView from './views/TwinView';
import { Post } from './types';

const posts: Post[] = generateFakePosts();
const TABS = ['Map', 'Trends', 'Tags', 'Insights', 'Data', 'Twin'] as const;

export default function App() {
  const [tab, setTab] = useState<typeof TABS[number]>('Map');
  return (
    <FilterProvider>
      <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
        <nav style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} disabled={tab === t}>
              {t}
            </button>
          ))}
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          {tab === 'Map' && <MapView posts={posts} />}
          {tab === 'Trends' && <TrendsView posts={posts} />}
          {tab === 'Tags' && <TagsView posts={posts} />}
          {tab === 'Insights' && <InsightsView posts={posts} />}
          {tab === 'Data' && <DataView posts={posts} />}
          {tab === 'Twin' && <TwinView />}
        </Suspense>
      </div>
    </FilterProvider>
  );
}
