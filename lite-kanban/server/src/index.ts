import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { db } from './db.js';
import { port } from './config.js';

const app = new Hono();
app.use('*', cors());

app.get('/api/health', (c) => c.json({ ok: true, time: new Date().toISOString() }));

app.get('/api/projects', (c) => {
  const rows = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
  return c.json(rows);
});

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`lite-kanban server listening on http://localhost:${info.port}`);
});
