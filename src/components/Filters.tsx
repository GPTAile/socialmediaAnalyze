import { useContext } from 'react';
import { FilterContext } from '../state/FilterContext';

export default function Filters() {
  const { filters, setFilters } = useContext(FilterContext);

  const set = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value || undefined });
  };

  return (
    <div className="filters" style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <select
        value={filters.platform || ''}
        onChange={(e) => set('platform', e.target.value)}
      >
        <option value="">All Platforms</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
        <option value="facebook">Facebook</option>
      </select>
      <input
        placeholder="Hashtag"
        value={filters.hashtag || ''}
        onChange={(e) => set('hashtag', e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Sentiment"
        value={filters.minSentiment ?? ''}
        onChange={(e) =>
          set(
            'minSentiment',
            e.target.value === '' ? undefined : Number(e.target.value)
          )
        }
      />
      <input
        type="date"
        value={filters.day || ''}
        onChange={(e) => set('day', e.target.value)}
      />
    </div>
  );
}
