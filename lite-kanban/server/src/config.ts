import { mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const root = process.env.LITE_KANBAN_HOME ?? join(homedir(), '.lite-kanban');
mkdirSync(root, { recursive: true });

export const paths = {
  root,
  db: join(root, 'data.db'),
  config: join(root, 'config.json'),
};

export const port = Number(process.env.PORT ?? 5174);
