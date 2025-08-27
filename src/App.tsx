import { Suspense, useState } from 'react';
import { AppBar, Tabs, Tab, Container } from '@mui/material';
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
      <AppBar position="static">
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          textColor="inherit"
          indicatorColor="secondary"
        >
          {TABS.map((t) => (
            <Tab key={t} label={t} value={t} />
          ))}
        </Tabs>
      </AppBar>
      <Container sx={{ my: 2 }}>
        <Suspense fallback={<div>Loading...</div>}>
          {tab === 'Map' && <MapView posts={posts} />}
          {tab === 'Trends' && <TrendsView posts={posts} />}
          {tab === 'Tags' && <TagsView posts={posts} />}
          {tab === 'Insights' && <InsightsView posts={posts} />}
          {tab === 'Data' && <DataView posts={posts} />}
          {tab === 'Twin' && <TwinView />}
        </Suspense>
      </Container>
    </FilterProvider>
  );
}
