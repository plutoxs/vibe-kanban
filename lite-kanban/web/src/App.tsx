import { useEffect, useState } from 'react';

export function App() {
  const [health, setHealth] = useState<string>('...');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setHealth(d.time))
      .catch((e) => setHealth(`error: ${String(e)}`));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b bg-white px-6 py-3">
        <h1 className="text-lg font-semibold">lite-kanban</h1>
      </header>
      <main className="px-6 py-4 text-sm text-neutral-600">
        server health: <span className="font-mono">{health}</span>
      </main>
    </div>
  );
}
