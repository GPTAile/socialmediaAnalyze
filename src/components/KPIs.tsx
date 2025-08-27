import { Stack, Paper, Typography } from '@mui/material';
import { Post } from '../types';
import { sentimentAverage } from '../lib/analytics';

export default function KPIs({ posts }: { posts: Post[] }) {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6">Total Posts</Typography>
        <Typography variant="subtitle1">{posts.length}</Typography>
      </Paper>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6">Avg Sentiment</Typography>
        <Typography variant="subtitle1">
          {sentimentAverage(posts).toFixed(2)}
        </Typography>
      </Paper>
    </Stack>
  );
}
