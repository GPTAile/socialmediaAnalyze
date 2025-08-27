import { useState } from 'react';
import { Post } from '../types';

export default function DataView({ posts }: { posts: Post[] }) {
  const [text, setText] = useState('');
  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={() => setText(JSON.stringify(posts, null, 2))}>
        Export
      </button>
      <textarea
        style={{ width: '100%', marginTop: '0.5rem' }}
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
