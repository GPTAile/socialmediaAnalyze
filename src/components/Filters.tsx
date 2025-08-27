import { useContext } from 'react';
import { Stack, TextField, MenuItem } from '@mui/material';
import { FilterContext } from '../state/FilterContext';

export default function Filters() {
  const { filters, setFilters } = useContext(FilterContext);

  const set = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value || undefined });
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <TextField
        select
        label="Platform"
        value={filters.platform || ''}
        onChange={(e) => set('platform', e.target.value)}
        sx={{ minWidth: 120 }}
      >
        <MenuItem value="">All Platforms</MenuItem>
        <MenuItem value="twitter">Twitter</MenuItem>
        <MenuItem value="instagram">Instagram</MenuItem>
        <MenuItem value="facebook">Facebook</MenuItem>
      </TextField>
      <TextField
        label="Hashtag"
        value={filters.hashtag || ''}
        onChange={(e) => set('hashtag', e.target.value)}
      />
      <TextField
        type="number"
        label="Min Sentiment"
        value={filters.minSentiment ?? ''}
        onChange={(e) =>
          set('minSentiment', e.target.value === '' ? undefined : Number(e.target.value))
        }
      />
      <TextField
        type="date"
        label="Day"
        InputLabelProps={{ shrink: true }}
        value={filters.day || ''}
        onChange={(e) => set('day', e.target.value)}
      />
    </Stack>
  );
}
