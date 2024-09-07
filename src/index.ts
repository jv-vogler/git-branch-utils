#!/usr/bin/env node

import app from '@/app';
app.start().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
