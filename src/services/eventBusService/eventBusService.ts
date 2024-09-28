import { AppEvent, EventMap } from '@/services/eventBusService/types';

type Dependencies = {
  eventBus: {
    emit: <T>(event: AppEvent, ...args: T[]) => boolean;
    on: <T>(
      event: AppEvent,
      listener: (...args: T[]) => void | Promise<void>,
    ) => Dependencies['eventBus'];
    off: <T>(
      event: AppEvent,
      listener: (...args: T[]) => void | Promise<void>,
    ) => Dependencies['eventBus'];
    removeAllListeners: (event?: AppEvent) => Dependencies['eventBus'];
  };
};

const createEventBusService = ({ eventBus }: Dependencies) => ({
  emit<K extends keyof EventMap>(
    event: K,
    ...args: EventMap[K] extends undefined ? [] : [EventMap[K]]
  ) {
    return eventBus.emit(event, ...args);
  },

  on<K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined
      ? () => void | Promise<void>
      : (args: EventMap[K]) => void | Promise<void>,
  ) {
    return eventBus.on(event, listener);
  },

  off<K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined
      ? () => void | Promise<void>
      : (args: EventMap[K]) => void | Promise<void>,
  ) {
    return eventBus.off(event, listener);
  },

  removeAllListeners(event?: AppEvent) {
    return eventBus.removeAllListeners(event);
  },
});

export { createEventBusService };
