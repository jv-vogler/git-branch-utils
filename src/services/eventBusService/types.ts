import { createEventBusService } from '@/services';

type EventMap = {
  'delete-branch': string;
  'branch-deleted': string;
  'restore-branch': string;
  'branch-restored': string;
  'quit-prompt': undefined;
};

type AppEvent = keyof EventMap;

type EventBusService = ReturnType<typeof createEventBusService>;

export type { EventBusService, AppEvent, EventMap };
