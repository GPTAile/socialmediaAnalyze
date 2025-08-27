import { Post } from '../types';
import { project } from '../lib/geo';

interface Props {
  posts: Post[];
  width?: number;
  height?: number;
}

export default function MapSVG({ posts, width = 800, height = 400 }: Props) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ background: '#eef', border: '1px solid #ccc' }}
    >
      {posts.map((p) => {
        const [x, y] = project(p.coords, width, height);
        return (
          <circle
            key={p.id}
            cx={x}
            cy={y}
            r={4}
            fill={p.sentiment > 0 ? 'green' : 'red'}
            opacity={0.7}
          />
        );
      })}
    </svg>
  );
}
