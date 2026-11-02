const clusters: Array<Array<[number, number]>> = [
  [
    [9, 14],
    [16, 8],
    [22, 16],
    [14, 22],
  ],
  [
    [78, 18],
    [86, 12],
    [91, 20],
    [84, 26],
  ],
  [
    [70, 62],
    [78, 56],
    [86, 64],
    [76, 72],
  ],
  [
    [12, 70],
    [18, 64],
    [26, 74],
  ],
];

function scatteredStars() {
  const points: Array<{ x: number; y: number; r: number; tone: string; twinkle: boolean }> = [];
  let seed = 20261102;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const tones = ["#f4f1ea", "#8ef0c8", "#e7c27a", "#f4f1ea", "#f4f1ea"];
  for (let i = 0; i < 72; i += 1) {
    points.push({
      x: next() * 1200,
      y: next() * 800,
      r: next() > 0.86 ? 1.7 : next() > 0.55 ? 1.15 : 0.7,
      tone: tones[Math.floor(next() * tones.length)],
      twinkle: next() > 0.72,
    });
  }
  return points;
}

const stars = scatteredStars();

function spark(cx: number, cy: number, size: number) {
  return `M ${cx} ${cy - size} L ${cx + size * 0.18} ${cy - size * 0.18} L ${cx + size} ${cy} L ${cx + size * 0.18} ${cy + size * 0.18} L ${cx} ${cy + size} L ${cx - size * 0.18} ${cy + size * 0.18} L ${cx - size} ${cy} L ${cx - size * 0.18} ${cy - size * 0.18} Z`;
}

export function Sky() {
  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-grid" />
      <svg className="sky-stars" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {clusters.map((cluster, index) => (
          <polyline
            key={index}
            points={cluster.map(([x, y]) => `${x * 12},${y * 8}`).join(" ")}
            fill="none"
            stroke="rgba(244,241,234,0.22)"
            strokeWidth="1"
          />
        ))}
        {clusters.flat().map(([x, y], index) => (
          <circle key={`c-${index}`} cx={x * 12} cy={y * 8} r={index % 3 === 0 ? 2 : 1.2} fill="#f4f1ea" opacity="0.9" />
        ))}
        {stars.map((star, index) => (
          <circle
            key={index}
            className={star.twinkle ? "sky-twinkle" : undefined}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill={star.tone}
            opacity={star.r > 1.4 ? 0.95 : 0.55}
            style={star.twinkle ? { animationDelay: `${(index % 7) * 0.45}s` } : undefined}
          />
        ))}
        <path d={spark(1040, 120, 7)} fill="#e7c27a" opacity="0.85" />
        <path d={spark(180, 250, 5)} fill="#8ef0c8" opacity="0.8" />
        <path d={spark(960, 560, 6)} fill="#f4f1ea" opacity="0.7" />
      </svg>
    </div>
  );
}
