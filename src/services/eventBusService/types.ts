import { createEventBusService } from '@/services';

import { BranchMetadata } from '@/shared/types';

type EventMap = {
  'delete-branch': string;
  'branch-deleted': string;
  'restore-branch': BranchMetadata;
  'branch-restored': string;
};

type AppEvent = keyof EventMap;

type EventBusService = ReturnType<typeof createEventBusService>;

export type { EventBusService, AppEvent, EventMap };
